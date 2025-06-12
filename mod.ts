import { initializeImageMagick } from "npm:@imagemagick/magick-wasm@0.0.35";
export * from "npm:@imagemagick/magick-wasm@0.0.35";

export async function initialize() {
  const wasmUrl = new URL(
    "https://cdn.jsdelivr.net/npm/@imagemagick/magick-wasm@0.0.35/dist/magick.wasm",
  );

  if (typeof caches === "undefined") {
    const response = await fetch(wasmUrl);
    await initializeImageMagick(new Int8Array(await response.arrayBuffer()));
    return;
  }

  const cache = await caches.open("magick_native");
  const cached = await cache.match(wasmUrl);

  if (cached) {
    await initializeImageMagick(new Int8Array(await cached.arrayBuffer()));
    return;
  }

  const response = await fetch(wasmUrl);
  await cache.put(wasmUrl, response.clone());
  await initializeImageMagick(new Int8Array(await response.arrayBuffer()));
}
