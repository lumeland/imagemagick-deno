# ImageMagick for Deno

Scripts to transform the source code of
[magick-wasm](https://github.com/dlemstra/magick-wasm) for Deno compatibility.

```sh
sh run.sh
```

To import ImageMagick into your Deno project:

```ts
import {
  ImageMagick,
  IMagickImage,
  initialize,
  MagickFormat,
} from "https://deno.land/x/imagemagick_deno/mod.ts";

await initialize(); // make sure to initialize first!

const data: Uint8Array = await Deno.readFile("image.jpg");

await ImageMagick.read(data, (img: IMagickImage) => {
  img.resize(200, 100);
  img.blur(20, 6);

  await img.write(
    MagickFormat.Jpeg,
    (data: Uint8Array) => Deno.writeFile("image-blur.jpg", data),
  );
});
```

## Build

- Transform the code: `sh run.sh`.
- Test it: `deno run -A --no-check test/test.ts`.
