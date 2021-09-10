# ImageMagick for Deno

Scripts to transform the source code of
[magick-wasm](https://github.com/dlemstra/magick-wasm) for Deno compatibility.

```sh
sh run.sh
```

To import Imagemagick in your Deno project:

```ts
import {
  ImageMagick,
  IMagickImage,
  initializeImageMagick,
  MagickFormat,
} from "https://deno.land/x/imagemagick-deno/mod.js";

await initializeImageMagick(); // make sure to initialize first!

const data: Uint8Array = await Deno.readFile("image.jpg");

ImageMagick.read(data, (img: IMagickImage) => {
  img.resize(200, 100);
  img.blur(20, 6);

  img.write(
    (data: Uint8Array) => Deno.writeFile("image-blur.jpg", data),
    MagickFormat.Jpeg,
  );
});
```
