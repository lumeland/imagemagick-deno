export * from "./src/index.ts";
import { initializeImageMagick } from "./src/index.ts";

export async function initialize() {
  const wasmUrl = new URL(import.meta.resolve("./src/wasm/magick_native.wasm"));

  if (wasmUrl.protocol === "file:") {
    await initializeImageMagick(await Deno.readFile(wasmUrl));
    return;
  }

  if (typeof caches === "undefined") {
    const response = await fetch(wasmUrl);
    await initializeImageMagick(new Int8Array(await response.arrayBuffer()));
    return;
  }

  const cache = await caches.open("magick_native");

  // Prevent https://github.com/denoland/deno/issues/19696
  try {
    const cached = await cache.match(wasmUrl);

    if (cached) {
      await initializeImageMagick(new Int8Array(await cached.arrayBuffer()));
      return;
    }
  } catch {
    // Ignore
  }

  const response = await fetch(wasmUrl);
  await cache.put(wasmUrl, response.clone());
  await initializeImageMagick(new Int8Array(await response.arrayBuffer()));
}
