export * from "./src/index.ts";
import { initializeImageMagick } from "./src/index.ts";

export async function initialize() {
  const wasmUrl = new URL(import.meta.resolve("./src/wasm/magick_native.wasm"));

  if (wasmUrl.protocol === "file:") {
    await initializeImageMagick(await Deno.readFile(wasmUrl));
    return;
  }

  const cache = await caches.open("magick_native");
  const cached = await cache.match(wasmUrl);

  if (cached) {
    const wasm = await cached.arrayBuffer();
    await initializeImageMagick(wasm);
    return;
  }

  const response = await fetch(wasmUrl);
  await cache.put(wasmUrl, response);
  await initializeImageMagick(await response.clone().arrayBuffer());
}
