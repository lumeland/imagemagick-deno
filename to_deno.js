import { convert } from "https://deno.land/x/nodedeno@v0.2.11/mod.js";

//Convert the code
await convert({
  src: "magick-wasm",
  input: ["src"],
  output: "deno",
  transpile: false,
  modules: {
    "@dlemstra/magick-native/magick": "src/wasm/magick.ts",
  },
  copy: {
    "magick.ts": "src/wasm/magick.ts",
    "mod.ts": "mod.ts",
    "magick-wasm/LICENSE": "LICENSE",
    "README.md": "README.md",
  },
});
