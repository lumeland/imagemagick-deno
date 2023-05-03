// deno run --allow-write --allow-read --no-check test/test.ts

import {
  ImageMagick,
  IMagickImage,
  initialize,
  MagickFormat,
} from "../deno/mod.ts";

console.log("Initialize");
await initialize();

console.log("Read");
const data: Uint8Array = await Deno.readFile("test/unsplash.jpg");

await ImageMagick.read(data, async (img: IMagickImage) => {
  console.log("crop");
  img.crop(1000, 1000);

  console.log("resize");
  img.resize(200, 100);

  console.log("write");
  await img.write(
    MagickFormat.Png,
    (data: Uint8Array) => Deno.writeFile("test/unsplash-blur.png", data),
  );
});

console.log("done!");
