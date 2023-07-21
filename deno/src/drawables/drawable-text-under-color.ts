// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.
import { IDrawable } from "./drawable.ts";
import { IDrawingWand } from "./drawing-wand.ts";
import { MagickColor } from "../magick-color.ts";

export class DrawableTextUnderColor implements IDrawable {
  private readonly _color: MagickColor;

  constructor(color: MagickColor) {
    this._color = color;
  }

  draw(wand: IDrawingWand): void {
    wand.textUnderColor(this._color);
  }
}
