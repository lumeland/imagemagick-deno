import {
  ImageMagick,
  IMagickImage,
  initializeImageMagick,
  MagickFormat,
} from "../deno/mod.ts";

console.log("Initialize");
await initializeImageMagick(); // make sure to initialize first!

console.log("Read");
const data: Uint8Array = await Deno.readFile("test/unsplash.jpg");

await ImageMagick.read(data, async (img: IMagickImage) => {
  console.log("resize");
  img.resize(200, 100);

  console.log("blur");
  img.blur(20, 6);

  console.log("write");
  await img.write(
    (data: Uint8Array) => Deno.writeFile("test/unsplash-blur.jpg", data),
    MagickFormat.Jpeg,
  );
});

console.log("!done");
