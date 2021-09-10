import { convert } from "https://deno.land/x/nodedeno@v0.2.10/mod.js";

//Convert the code
await convert({
  src: "magick-wasm",
  input: ["src"],
  output: "deno",
  transpile: false,
  modules: {
    "src/wasm/magick.js": "src/wasm/magick.ts",
    "src/wasm/magick_native.js": "src/wasm/magick_native.js",
  },
  copy: {
    "magick.ts": "src/wasm/magick.ts",
    "mod.ts": "mod.ts",
  },
});
