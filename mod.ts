export * from "./src/index.ts";
import { initializeImageMagick  } from "./src/index.ts";

export async function initialize () {
  const wasmFile = import.meta.resolve("./src/wasm/magick_native.wasm");
  const file = await fetch(wasmFile);
  const wasm = await file.arrayBuffer();

  await initializeImageMagick(wasm);
}
