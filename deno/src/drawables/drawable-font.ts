// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.
import { IDrawable } from "./drawable.ts";
import { IDrawingWand } from "./drawing-wand.ts";
import { Magick } from "../magick.ts";

export class DrawableFont implements IDrawable {
  private readonly _font: string;

  constructor(font: string) {
    this._font = font;
  }

  draw(wand: IDrawingWand): void {
    const fileName = Magick._getFontFileName(this._font);

    wand.font(fileName);
  }
}
