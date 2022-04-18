// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.
import { IDrawable } from "./drawable.ts";
import { IDrawingWand } from "./drawing-wand.ts";
import { Percentage } from "../percentage.ts";

export class DrawableFillOpacity implements IDrawable {
  private readonly _opacity: Percentage;

  constructor(opacity: Percentage) {
    this._opacity = opacity;
  }

  draw(wand: IDrawingWand): void {
    wand.fillOpacity(this._opacity.toDouble() / 100);
  }
}
