import MagickNativeWasm from "./magick_native.js";
export type quantum = number;
export type quantumArray = Uint8Array;

/** @internal */
export interface ImageMagickApi {
  _malloc(size: number): number;
  _free(instance: number): void;
  HEAPU8: quantumArray;
  getValue(instance: number, type: string): number;
  setValue(instance: number, value: number, type: string): void;
  UTF8ToString(ptr: number): string;
  lengthBytesUTF8(str: string): number;
  stringToUTF8(str: string, outPtr: number, maxBytesToWrite: number): void;
  _MagickColor_Create(): number;
  _MagickColor_Dispose(instance: number): void;
  _MagickColor_Count_Get(instance: number): number;
  _MagickColor_Red_Get(instance: number): quantum;
  _MagickColor_Red_Set(instance: number, value: quantum): void;
  _MagickColor_Green_Get(instance: number): quantum;
  _MagickColor_Green_Set(instance: number, value: quantum): void;
  _MagickColor_Blue_Get(instance: number): quantum;
  _MagickColor_Blue_Set(instance: number, value: quantum): void;
  _MagickColor_Alpha_Get(instance: number): quantum;
  _MagickColor_Alpha_Set(instance: number, value: quantum): void;
  _MagickColor_Black_Get(instance: number): quantum;
  _MagickColor_Black_Set(instance: number, value: quantum): void;
  _MagickColor_IsCMYK_Get(color: number): number;
  _MagickColor_IsCMYK_Set(color: number, value: number): void;
  _MagickColor_Clone(color: number): number;
  _MagickColor_FuzzyEquals(
    instance: number,
    other: number,
    fuzz: quantum,
  ): number;
  _MagickColor_Initialize(instance: number, value: number): number;
  _MagickColorCollection_DisposeList(list: number): void;
  _MagickColorCollection_GetInstance(list: number, index: number): number;
  _DrawingWand_Create(image: number, drawInfo: number): number;
  _DrawingWand_Dispose(instance: number): void;
  _DrawingWand_Affine(
    instance: number,
    scaleX: number,
    scaleY: number,
    shearX: number,
    shearY: number,
    translateX: number,
    translateY: number,
    exception: number,
  ): void;
  _DrawingWand_Alpha(
    instance: number,
    x: number,
    y: number,
    paintMethod: number,
    exception: number,
  ): void;
  _DrawingWand_Arc(
    instance: number,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    startDegrees: number,
    endDegrees: number,
    exception: number,
  ): void;
  _DrawingWand_Bezier(
    instance: number,
    coordinates: number,
    length: number,
    exception: number,
  ): void;
  _DrawingWand_BorderColor(
    instance: number,
    color: number,
    exception: number,
  ): void;
  _DrawingWand_Circle(
    instance: number,
    originX: number,
    originY: number,
    perimeterX: number,
    perimeterY: number,
    exception: number,
  ): void;
  _DrawingWand_ClipPath(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_ClipRule(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_ClipUnits(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_Color(
    instance: number,
    x: number,
    y: number,
    paintMethod: number,
    exception: number,
  ): void;
  _DrawingWand_Composite(
    instance: number,
    x: number,
    y: number,
    width: number,
    height: number,
    compositeOperator: number,
    image: number,
    exception: number,
  ): void;
  _DrawingWand_Density(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_Ellipse(
    instance: number,
    originX: number,
    originY: number,
    radiusX: number,
    radiusY: number,
    startDegrees: number,
    endDegrees: number,
    exception: number,
  ): void;
  _DrawingWand_FillColor(
    instance: number,
    color: number,
    exception: number,
  ): void;
  _DrawingWand_FillOpacity(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_FillPatternUrl(
    instance: number,
    url: number,
    exception: number,
  ): void;
  _DrawingWand_FillRule(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_Font(
    instance: number,
    fontName: number,
    exception: number,
  ): void;
  _DrawingWand_FontFamily(
    instance: number,
    family: number,
    style: number,
    weight: number,
    stretch: number,
    exception: number,
  ): void;
  _DrawingWand_FontPointSize(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_FontTypeMetrics(
    instance: number,
    text: number,
    ignoreNewlines: number,
    exception: number,
  ): number;
  _DrawingWand_Gravity(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_Line(
    instance: number,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    exception: number,
  ): void;
  _DrawingWand_PathArcAbs(
    instance: number,
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotationX: number,
    useLargeArc: number,
    useSweep: number,
    exception: number,
  ): void;
  _DrawingWand_PathArcRel(
    instance: number,
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotationX: number,
    useLargeArc: number,
    useSweep: number,
    exception: number,
  ): void;
  _DrawingWand_PathClose(instance: number, exception: number): void;
  _DrawingWand_PathCurveToAbs(
    instance: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathCurveToRel(
    instance: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathFinish(instance: number, exception: number): void;
  _DrawingWand_PathLineToAbs(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathLineToHorizontalAbs(
    instance: number,
    x: number,
    exception: number,
  ): void;
  _DrawingWand_PathLineToHorizontalRel(
    instance: number,
    x: number,
    exception: number,
  ): void;
  _DrawingWand_PathLineToRel(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathLineToVerticalAbs(
    instance: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathLineToVerticalRel(
    instance: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathMoveToAbs(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathMoveToRel(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathQuadraticCurveToAbs(
    instance: number,
    x1: number,
    y1: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathQuadraticCurveToRel(
    instance: number,
    x1: number,
    y1: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathSmoothCurveToAbs(
    instance: number,
    x2: number,
    y2: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathSmoothCurveToRel(
    instance: number,
    x2: number,
    y2: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathSmoothQuadraticCurveToAbs(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathSmoothQuadraticCurveToRel(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_PathStart(instance: number, exception: number): void;
  _DrawingWand_Point(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_Polygon(
    instance: number,
    coordinates: number,
    length: number,
    exception: number,
  ): void;
  _DrawingWand_Polyline(
    instance: number,
    coordinates: number,
    length: number,
    exception: number,
  ): void;
  _DrawingWand_PopClipPath(instance: number, exception: number): void;
  _DrawingWand_PopGraphicContext(instance: number, exception: number): void;
  _DrawingWand_PopPattern(instance: number, exception: number): void;
  _DrawingWand_PushClipPath(
    instance: number,
    clipPath: number,
    exception: number,
  ): void;
  _DrawingWand_PushGraphicContext(instance: number, exception: number): void;
  _DrawingWand_PushPattern(
    instance: number,
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    exception: number,
  ): void;
  _DrawingWand_Rectangle(
    instance: number,
    upperLeftX: number,
    upperLeftY: number,
    lowerRightX: number,
    lowerRightY: number,
    exception: number,
  ): void;
  _DrawingWand_Render(instance: number, exception: number): void;
  _DrawingWand_Rotation(
    instance: number,
    angle: number,
    exception: number,
  ): void;
  _DrawingWand_RoundRectangle(
    instance: number,
    upperLeftX: number,
    upperLeftY: number,
    lowerRightX: number,
    lowerRightY: number,
    cornerWidth: number,
    cornerHeight: number,
    exception: number,
  ): void;
  _DrawingWand_Scaling(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_SkewX(instance: number, angle: number, exception: number): void;
  _DrawingWand_SkewY(instance: number, angle: number, exception: number): void;
  _DrawingWand_StrokeAntialias(
    instance: number,
    isEnabled: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeColor(
    instance: number,
    color: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeDashArray(
    instance: number,
    dash: number,
    length: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeDashOffset(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeLineCap(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeLineJoin(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeMiterLimit(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeOpacity(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_StrokePatternUrl(
    instance: number,
    url: number,
    exception: number,
  ): void;
  _DrawingWand_StrokeWidth(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_Text(
    instance: number,
    x: number,
    y: number,
    text: number,
    exception: number,
  ): void;
  _DrawingWand_TextAlignment(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_TextAntialias(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_TextDecoration(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_TextDirection(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_TextEncoding(
    instance: number,
    encoding: number,
    exception: number,
  ): void;
  _DrawingWand_TextInterlineSpacing(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_TextInterwordSpacing(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_TextKerning(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingWand_TextUnderColor(
    instance: number,
    color: number,
    exception: number,
  ): void;
  _DrawingWand_Translation(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): void;
  _DrawingWand_Viewbox(
    instance: number,
    upperLeftX: number,
    upperLeftY: number,
    lowerRightX: number,
    lowerRightY: number,
    exception: number,
  ): void;
  _PointInfoCollection_Create(length: number): number;
  _PointInfoCollection_Dispose(instance: number): void;
  _PointInfoCollection_GetX(instance: number, index: number): number;
  _PointInfoCollection_GetY(instance: number, index: number): number;
  _PointInfoCollection_Set(
    instance: number,
    index: number,
    x: number,
    y: number,
  ): void;
  _MagickExceptionHelper_Description(instance: number): number;
  _MagickExceptionHelper_Dispose(instance: number): void;
  _MagickExceptionHelper_Related(instance: number, idx: number): number;
  _MagickExceptionHelper_RelatedCount(instance: number): number;
  _MagickExceptionHelper_Message(instance: number): number;
  _MagickExceptionHelper_Severity(instance: number): number;
  _Environment_Initialize(): void;
  _Environment_SetEnv(name: number, value: number): void;
  _MagickMemory_Relinquish(value: number): void;
  _Magick_Delegates_Get(): number;
  _Magick_Features_Get(): number;
  _Magick_ImageMagickVersion_Get(): number;
  _Magick_GetFonts(length: number, exception: number): number;
  _Magick_GetFontFamily(list: number, index: number): number;
  _Magick_GetFontName(list: number, index: number): number;
  _Magick_DisposeFonts(list: number): void;
  _Magick_SetRandomSeed(seed: number): void;
  _Magick_SetLogDelegate(method: number): void;
  _Magick_SetLogEvents(events: number): void;
  _Magick_SetOpenCLEnabled(value: number): number;
  _MagickFormatInfo_CreateList(length: number, exception: number): number;
  _MagickFormatInfo_DisposeList(list: number, length: number): void;
  _MagickFormatInfo_CanReadMultithreaded_Get(instance: number): number;
  _MagickFormatInfo_CanWriteMultithreaded_Get(instance: number): number;
  _MagickFormatInfo_Description_Get(instance: number): number;
  _MagickFormatInfo_Format_Get(instance: number): number;
  _MagickFormatInfo_IsMultiFrame_Get(instance: number): number;
  _MagickFormatInfo_IsReadable_Get(instance: number): number;
  _MagickFormatInfo_IsWritable_Get(instance: number): number;
  _MagickFormatInfo_MimeType_Get(instance: number): number;
  _MagickFormatInfo_Module_Get(instance: number): number;
  _MagickFormatInfo_GetInfo(
    list: number,
    index: number,
    exception: number,
  ): number;
  _MagickFormatInfo_GetInfoByName(name: number, exception: number): number;
  _MagickFormatInfo_Unregister(format: number): void;
  _MagickImage_Create(settings: number, exception: number): number;
  _MagickImage_Dispose(instance: number): void;
  _MagickImage_AnimationDelay_Get(instance: number): number;
  _MagickImage_AnimationDelay_Set(instance: number, value: number): void;
  _MagickImage_AnimationIterations_Get(instance: number): number;
  _MagickImage_AnimationIterations_Set(instance: number, value: number): void;
  _MagickImage_AnimationTicksPerSecond_Get(instance: number): number;
  _MagickImage_AnimationTicksPerSecond_Set(
    instance: number,
    value: number,
  ): void;
  _MagickImage_BackgroundColor_Get(instance: number): number;
  _MagickImage_BackgroundColor_Set(instance: number, value: number): void;
  _MagickImage_BaseHeight_Get(instance: number): number;
  _MagickImage_BaseWidth_Get(instance: number): number;
  _MagickImage_BlackPointCompensation_Get(instance: number): number;
  _MagickImage_BlackPointCompensation_Set(
    instance: number,
    value: number,
  ): void;
  _MagickImage_BorderColor_Get(instance: number): number;
  _MagickImage_BorderColor_Set(instance: number, value: number): void;
  _MagickImage_BoundingBox_Get(instance: number, exception: number): number;
  _MagickImage_ChannelCount_Get(instance: number): number;
  _MagickImage_ChromaBluePrimary_Get(instance: number): number;
  _MagickImage_ChromaBluePrimary_Set(instance: number, value: number): void;
  _MagickImage_ChromaGreenPrimary_Get(instance: number): number;
  _MagickImage_ChromaGreenPrimary_Set(instance: number, value: number): void;
  _MagickImage_ChromaRedPrimary_Get(instance: number): number;
  _MagickImage_ChromaRedPrimary_Set(instance: number, value: number): void;
  _MagickImage_ChromaWhitePoint_Get(instance: number): number;
  _MagickImage_ChromaWhitePoint_Set(instance: number, value: number): void;
  _MagickImage_ClassType_Get(instance: number, exception: number): number;
  _MagickImage_ClassType_Set(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_ColorFuzz_Get(instance: number): number;
  _MagickImage_ColorFuzz_Set(instance: number, value: number): void;
  _MagickImage_ColormapSize_Get(instance: number, exception: number): number;
  _MagickImage_ColormapSize_Set(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_ColorSpace_Get(instance: number, exception: number): number;
  _MagickImage_ColorSpace_Set(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_ColorType_Get(instance: number, exception: number): number;
  _MagickImage_ColorType_Set(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_Compose_Get(instance: number): number;
  _MagickImage_Compose_Set(instance: number, value: number): void;
  _MagickImage_Compression_Get(instance: number): number;
  _MagickImage_Depth_Get(instance: number): number;
  _MagickImage_Depth_Set(instance: number, value: number): void;
  _MagickImage_EncodingGeometry_Get(instance: number): number;
  _MagickImage_Endian_Get(instance: number): number;
  _MagickImage_Endian_Set(instance: number, value: number): void;
  _MagickImage_FileName_Get(instance: number): number;
  _MagickImage_FileName_Set(instance: number, value: number): void;
  _MagickImage_FilterType_Get(instance: number): number;
  _MagickImage_FilterType_Set(instance: number, value: number): void;
  _MagickImage_Format_Get(instance: number): number;
  _MagickImage_Format_Set(instance: number, value: number): void;
  _MagickImage_Gamma_Get(instance: number): number;
  _MagickImage_GifDisposeMethod_Get(instance: number): number;
  _MagickImage_GifDisposeMethod_Set(instance: number, value: number): void;
  _MagickImage_Interpolate_Get(instance: number): number;
  _MagickImage_Interpolate_Set(instance: number, value: number): void;
  _MagickImage_HasAlpha_Get(instance: number, exception: number): number;
  _MagickImage_HasAlpha_Set(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_Height_Get(instance: number): number;
  _MagickImage_Interlace_Get(instance: number): number;
  _MagickImage_Interlace_Set(instance: number, value: number): void;
  _MagickImage_IsOpaque_Get(instance: number, exception: number): number;
  _MagickImage_MatteColor_Get(instance: number): number;
  _MagickImage_MatteColor_Set(instance: number, value: number): void;
  _MagickImage_MeanErrorPerPixel_Get(instance: number): number;
  _MagickImage_NormalizedMaximumError_Get(instance: number): number;
  _MagickImage_NormalizedMeanError_Get(instance: number): number;
  _MagickImage_Orientation_Get(instance: number): number;
  _MagickImage_Orientation_Set(instance: number, value: number): void;
  _MagickImage_RenderingIntent_Get(instance: number): number;
  _MagickImage_RenderingIntent_Set(instance: number, value: number): void;
  _MagickImage_Page_Get(instance: number): number;
  _MagickImage_Page_Set(instance: number, value: number): void;
  _MagickImage_Quality_Get(instance: number): number;
  _MagickImage_Quality_Set(instance: number, value: number): void;
  _MagickImage_ResolutionUnits_Get(instance: number): number;
  _MagickImage_ResolutionUnits_Set(instance: number, value: number): void;
  _MagickImage_ResolutionX_Get(instance: number): number;
  _MagickImage_ResolutionX_Set(instance: number, value: number): void;
  _MagickImage_ResolutionY_Get(instance: number): number;
  _MagickImage_ResolutionY_Set(instance: number, value: number): void;
  _MagickImage_Signature_Get(instance: number, exception: number): number;
  _MagickImage_TotalColors_Get(instance: number, exception: number): number;
  _MagickImage_VirtualPixelMethod_Get(
    instance: number,
    exception: number,
  ): number;
  _MagickImage_VirtualPixelMethod_Set(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_Width_Get(instance: number): number;
  _MagickImage_AdaptiveBlur(
    instance: number,
    radius: number,
    sigma: number,
    exception: number,
  ): number;
  _MagickImage_AdaptiveResize(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_AdaptiveSharpen(
    instance: number,
    radius: number,
    sigma: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_AdaptiveThreshold(
    instance: number,
    width: number,
    height: number,
    bias: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_AddNoise(
    instance: number,
    noiseType: number,
    attenuate: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_AddProfile(
    instance: number,
    name: number,
    datum: number,
    length: number,
    exception: number,
  ): void;
  _MagickImage_AffineTransform(
    instance: number,
    scaleX: number,
    scaleY: number,
    shearX: number,
    shearY: number,
    translateX: number,
    translateY: number,
    exception: number,
  ): number;
  _MagickImage_Annotate(
    instance: number,
    settings: number,
    text: number,
    boundingArea: number,
    gravity: number,
    angle: number,
    exception: number,
  ): void;
  _MagickImage_AnnotateGravity(
    instance: number,
    settings: number,
    text: number,
    gravity: number,
    exception: number,
  ): void;
  _MagickImage_AutoGamma(
    instance: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_AutoLevel(
    instance: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_AutoOrient(instance: number, exception: number): number;
  _MagickImage_AutoThreshold(
    instance: number,
    method: number,
    exception: number,
  ): void;
  _MagickImage_BlackThreshold(
    instance: number,
    threshold: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_BlueShift(
    instance: number,
    factor: number,
    exception: number,
  ): number;
  _MagickImage_Blur(
    instance: number,
    radius: number,
    sigma: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Border(
    instance: number,
    value: number,
    exception: number,
  ): number;
  _MagickImage_BrightnessContrast(
    instance: number,
    brightness: number,
    contrast: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_CannyEdge(
    instance: number,
    radius: number,
    sigma: number,
    lower: number,
    upper: number,
    exception: number,
  ): number;
  _MagickImage_ChannelOffset(instance: number, channel: number): number;
  _MagickImage_Charcoal(
    instance: number,
    radius: number,
    sigma: number,
    exception: number,
  ): number;
  _MagickImage_Chop(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_Clahe(
    instance: number,
    xTiles: number,
    yTiles: number,
    numberBins: number,
    clipLimit: number,
    exception: number,
  ): void;
  _MagickImage_Clamp(instance: number, exception: number): void;
  _MagickImage_ClampChannel(
    instance: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_Clip(instance: number, exception: number): void;
  _MagickImage_ClipPath(
    instance: number,
    pathName: number,
    inside: number,
    exception: number,
  ): void;
  _MagickImage_Clone(instance: number, exception: number): number;
  _MagickImage_CloneArea(
    instance: number,
    width: number,
    height: number,
    exception: number,
  ): number;
  _MagickImage_Clut(
    instance: number,
    clutImage: number,
    method: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_ColorDecisionList(
    instance: number,
    fileName: number,
    exception: number,
  ): void;
  _MagickImage_Colorize(
    instance: number,
    color: number,
    blend: number,
    exception: number,
  ): number;
  _MagickImage_ColorMatrix(
    instance: number,
    kernel: number,
    exception: number,
  ): number;
  _MagickImage_ColorThreshold(
    instance: number,
    startColor: number,
    stopColor: number,
    exception: number,
  ): void;
  _MagickImage_Compare(
    instance: number,
    reference: number,
    metric: number,
    channels: number,
    distortion: number,
    exception: number,
  ): number;
  _MagickImage_CompareDistortion(
    instance: number,
    reference: number,
    metric: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Composite(
    instance: number,
    reference: number,
    x: number,
    y: number,
    compose: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_CompositeGravity(
    instance: number,
    reference: number,
    gravity: number,
    x: number,
    y: number,
    compose: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_ConnectedComponents(
    instance: number,
    connectivity: number,
    objects: number,
    exception: number,
  ): number;
  _MagickImage_Contrast(
    instance: number,
    enhance: number,
    exception: number,
  ): void;
  _MagickImage_ContrastStretch(
    instance: number,
    blackPoint: number,
    whitePoint: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_ConvexHull(
    instance: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_Convolve(
    instance: number,
    kernel: number,
    exception: number,
  ): number;
  _MagickImage_CopyPixels(
    instance: number,
    image: number,
    geometry: number,
    offset: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_Crop(
    instance: number,
    geometry: number,
    gravity: number,
    exception: number,
  ): number;
  _MagickImage_CropToTiles(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_CycleColormap(
    instance: number,
    amount: number,
    exception: number,
  ): void;
  _MagickImage_Decipher(
    instance: number,
    passphrase: number,
    exception: number,
  ): void;
  _MagickImage_Deskew(
    instance: number,
    threshold: number,
    exception: number,
  ): number;
  _MagickImage_Despeckle(instance: number, exception: number): number;
  _MagickImage_DetermineColorType(instance: number, exception: number): number;
  _MagickImage_Distort(
    instance: number,
    method: number,
    bestfit: number,
    arguments: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_Edge(
    instance: number,
    radius: number,
    exception: number,
  ): number;
  _MagickImage_Emboss(
    instance: number,
    radius: number,
    sigma: number,
    exception: number,
  ): number;
  _MagickImage_Encipher(
    instance: number,
    passphrase: number,
    exception: number,
  ): void;
  _MagickImage_Enhance(instance: number, exception: number): number;
  _MagickImage_Equalize(instance: number, exception: number): void;
  _MagickImage_Equals(
    instance: number,
    reference: number,
    exception: number,
  ): number;
  _MagickImage_EvaluateFunction(
    instance: number,
    channels: number,
    evaluateFunction: number,
    values: number,
    length: number,
    exception: number,
  ): void;
  _MagickImage_EvaluateGeometry(
    instance: number,
    channels: number,
    geometry: number,
    evaluateOperator: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_EvaluateOperator(
    instance: number,
    channels: number,
    evaluateOperator: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_Extent(
    instance: number,
    geometry: number,
    gravity: number,
    exception: number,
  ): number;
  _MagickImage_Flip(instance: number, exception: number): number;
  _MagickImage_FloodFill(
    instance: number,
    settings: number,
    x: number,
    y: number,
    target: number,
    invert: number,
    exception: number,
  ): void;
  _MagickImage_Flop(instance: number, exception: number): number;
  _MagickImage_FontTypeMetrics(
    instance: number,
    settings: number,
    ignoreNewLines: number,
    exception: number,
  ): number;
  _MagickImage_FormatExpression(
    instance: number,
    settings: number,
    expression: number,
    exception: number,
  ): number;
  _MagickImage_Frame(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_Fx(
    instance: number,
    expression: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_GammaCorrect(
    instance: number,
    gamma: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_GaussianBlur(
    instance: number,
    radius: number,
    sigma: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_GetArtifact(instance: number, name: number): number;
  _MagickImage_GetAttribute(
    instance: number,
    name: number,
    exception: number,
  ): number;
  _MagickImage_GetBitDepth(
    instance: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_GetColormap(instance: number, index: number): number;
  _MagickImage_GetNext(instance: number): number;
  _MagickImage_GetNextArtifactName(instance: number): number;
  _MagickImage_GetNextAttributeName(instance: number): number;
  _MagickImage_GetNextProfileName(instance: number): number;
  _MagickImage_GetProfile(instance: number, name: number): number;
  _MagickImage_GetReadMask(instance: number, exception: number): number;
  _MagickImage_GetWriteMask(instance: number, exception: number): number;
  _MagickImage_Grayscale(
    instance: number,
    method: number,
    exception: number,
  ): void;
  _MagickImage_HaldClut(
    instance: number,
    image: number,
    exception: number,
  ): void;
  _MagickImage_HasChannel(instance: number, channel: number): number;
  _MagickImage_HasProfile(instance: number, name: number): number;
  _MagickImage_Histogram(
    instance: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_HoughLine(
    instance: number,
    width: number,
    height: number,
    threshold: number,
    exception: number,
  ): number;
  _MagickImage_Implode(
    instance: number,
    amount: number,
    method: number,
    exception: number,
  ): number;
  _MagickImage_Kmeans(
    instance: number,
    numberColors: number,
    maxIterations: number,
    tolerance: number,
    exception: number,
  ): void;
  _MagickImage_Kuwahara(
    instance: number,
    radius: number,
    sigma: number,
    exception: number,
  ): number;
  _MagickImage_Level(
    instance: number,
    blackPoint: number,
    whitePoint: number,
    gamma: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_LevelColors(
    instance: number,
    blackColor: number,
    whiteColor: number,
    channels: number,
    invert: number,
    exception: number,
  ): void;
  _MagickImage_Levelize(
    instance: number,
    blackPoint: number,
    whitePoint: number,
    gamma: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_LinearStretch(
    instance: number,
    blackPoint: number,
    whitePoint: number,
    exception: number,
  ): void;
  _MagickImage_LiquidRescale(
    instance: number,
    geometry: number,
    deltaX: number,
    rigidity: number,
    exception: number,
  ): number;
  _MagickImage_LocalContrast(
    instance: number,
    radius: number,
    strength: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Magnify(instance: number, exception: number): number;
  _MagickImage_Map(
    instance: number,
    image: number,
    settings: number,
    exception: number,
  ): number;
  _MagickImage_MeanShift(
    instance: number,
    width: number,
    height: number,
    colorDistance: number,
    exception: number,
  ): number;
  _MagickImage_Minify(instance: number, exception: number): number;
  _MagickImage_MinimumBoundingBox(
    instance: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_Modulate(
    instance: number,
    modulate: number,
    exception: number,
  ): void;
  _MagickImage_Moments(instance: number, exception: number): number;
  _MagickImage_Morphology(
    instance: number,
    method: number,
    kernel: number,
    channels: number,
    iterations: number,
    exception: number,
  ): number;
  _MagickImage_MotionBlur(
    instance: number,
    radius: number,
    sigma: number,
    angle: number,
    exception: number,
  ): number;
  _MagickImage_Negate(
    instance: number,
    onlyGrayscale: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_Normalize(instance: number, exception: number): void;
  _MagickImage_OilPaint(
    instance: number,
    radius: number,
    sigma: number,
    exception: number,
  ): number;
  _MagickImage_Opaque(
    instance: number,
    target: number,
    fill: number,
    invert: number,
    exception: number,
  ): void;
  _MagickImage_OrderedDither(
    instance: number,
    thresholdMap: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_Perceptible(
    instance: number,
    epsilon: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_PerceptualHash(instance: number, exception: number): number;
  _MagickImage_Quantize(
    instance: number,
    settings: number,
    exception: number,
  ): void;
  _MagickImage_Polaroid(
    instance: number,
    settings: number,
    caption: number,
    angle: number,
    method: number,
    exception: number,
  ): number;
  _MagickImage_Posterize(
    instance: number,
    levels: number,
    method: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_RaiseOrLower(
    image: number,
    size: number,
    raise: number,
    exception: number,
  ): void;
  _MagickImage_RandomThreshold(
    instance: number,
    low: number,
    high: number,
    exception: number,
  ): void;
  _MagickImage_RangeThreshold(
    instance: number,
    low_black: number,
    low_white: number,
    high_white: number,
    high_black: number,
    exception: number,
  ): void;
  _MagickImage_ReadBlob(
    settings: number,
    data: number,
    offset: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_ReadFile(settings: number, exception: number): number;
  _MagickImage_ReadPixels(
    width: number,
    height: number,
    map: number,
    storageType: number,
    data: number,
    offset: number,
    exception: number,
  ): number;
  _MagickImage_ReadStream(
    settings: number,
    reader: number,
    seeker: number,
    teller: number,
    exception: number,
  ): number;
  _MagickImage_RegionMask(
    instance: number,
    region: number,
    exception: number,
  ): void;
  _MagickImage_RemoveArtifact(instance: number, name: number): void;
  _MagickImage_RemoveAttribute(instance: number, name: number): void;
  _MagickImage_RemoveProfile(instance: number, name: number): void;
  _MagickImage_ResetArtifactIterator(instance: number): void;
  _MagickImage_ResetAttributeIterator(instance: number): void;
  _MagickImage_ResetProfileIterator(instance: number): void;
  _MagickImage_Resample(
    instance: number,
    resolutionX: number,
    resolutionY: number,
    exception: number,
  ): number;
  _MagickImage_Resize(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_Roll(
    instance: number,
    x: number,
    y: number,
    exception: number,
  ): number;
  _MagickImage_Rotate(
    instance: number,
    degrees: number,
    exception: number,
  ): number;
  _MagickImage_RotationalBlur(
    instance: number,
    angle: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Sample(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_Scale(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_Segment(
    instance: number,
    colorSpace: number,
    clusterThreshold: number,
    smoothingThreshold: number,
    exception: number,
  ): void;
  _MagickImage_SelectiveBlur(
    instance: number,
    radius: number,
    sigma: number,
    threshold: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Separate(
    instance: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_SepiaTone(
    instance: number,
    threshold: number,
    exception: number,
  ): number;
  _MagickImage_SetAlpha(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_SetArtifact(instance: number, name: number, value: number): void;
  _MagickImage_SetAttribute(
    instance: number,
    name: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_SetBitDepth(
    instance: number,
    channels: number,
    value: number,
    exception: number,
  ): void;
  _MagickImage_SetColormap(
    instance: number,
    index: number,
    color: number,
    exception: number,
  ): void;
  _MagickImage_SetColorMetric(
    instance: number,
    reference: number,
    exception: number,
  ): number;
  _MagickImage_SetNext(image: number, next: number): void;
  _MagickImage_SetProgressDelegate(instance: number, method: number): void;
  _MagickImage_SetReadMask(
    instance: number,
    mask: number,
    exception: number,
  ): void;
  _MagickImage_SetWriteMask(
    instance: number,
    mask: number,
    exception: number,
  ): void;
  _MagickImage_Shade(
    instance: number,
    azimuth: number,
    elevation: number,
    colorShading: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Shadow(
    instance: number,
    x: number,
    y: number,
    sigma: number,
    alphaPercentage: number,
    exception: number,
  ): number;
  _MagickImage_Sharpen(
    instance: number,
    radius: number,
    sigma: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Shave(
    instance: number,
    leftRight: number,
    topBottom: number,
    exception: number,
  ): number;
  _MagickImage_Shear(
    instance: number,
    xAngle: number,
    yAngle: number,
    exception: number,
  ): number;
  _MagickImage_SigmoidalContrast(
    instance: number,
    sharpen: number,
    contrast: number,
    midpoint: number,
    exception: number,
  ): void;
  _MagickImage_SparseColor(
    instance: number,
    channels: number,
    method: number,
    arguments: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_Spread(
    instance: number,
    method: number,
    radius: number,
    exception: number,
  ): number;
  _MagickImage_Sketch(
    instance: number,
    radius: number,
    sigma: number,
    angle: number,
    exception: number,
  ): number;
  _MagickImage_Solarize(
    instance: number,
    factor: number,
    exception: number,
  ): void;
  _MagickImage_Splice(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_Statistic(
    instance: number,
    type: number,
    width: number,
    height: number,
    exception: number,
  ): number;
  _MagickImage_Statistics(instance: number, exception: number): number;
  _MagickImage_Stegano(
    instance: number,
    watermark: number,
    exception: number,
  ): number;
  _MagickImage_Stereo(
    instance: number,
    rightImage: number,
    exception: number,
  ): number;
  _MagickImage_Strip(instance: number, exception: number): void;
  _MagickImage_SubImageSearch(
    instance: number,
    reference: number,
    metric: number,
    similarityThreshold: number,
    offset: number,
    similarityMetric: number,
    exception: number,
  ): number;
  _MagickImage_Swirl(
    instance: number,
    method: number,
    degrees: number,
    exception: number,
  ): number;
  _MagickImage_Texture(
    instance: number,
    image: number,
    exception: number,
  ): void;
  _MagickImage_Threshold(
    instance: number,
    threshold: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_Thumbnail(
    instance: number,
    geometry: number,
    exception: number,
  ): number;
  _MagickImage_Tint(
    instance: number,
    opacity: number,
    tint: number,
    exception: number,
  ): number;
  _MagickImage_Transparent(
    instance: number,
    color: number,
    invert: number,
    exception: number,
  ): void;
  _MagickImage_TransparentChroma(
    instance: number,
    colorLow: number,
    colorHigh: number,
    invert: number,
    exception: number,
  ): void;
  _MagickImage_Transpose(instance: number, exception: number): number;
  _MagickImage_Transverse(instance: number, exception: number): number;
  _MagickImage_Trim(instance: number, exception: number): number;
  _MagickImage_UniqueColors(instance: number, exception: number): number;
  _MagickImage_UnsharpMask(
    instance: number,
    radius: number,
    sigma: number,
    amount: number,
    threshold: number,
    channels: number,
    exception: number,
  ): number;
  _MagickImage_Vignette(
    instance: number,
    radius: number,
    sigma: number,
    x: number,
    y: number,
    exception: number,
  ): number;
  _MagickImage_Wave(
    instance: number,
    method: number,
    amplitude: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_WaveletDenoise(
    instance: number,
    threshold: number,
    softness: number,
    exception: number,
  ): number;
  _MagickImage_WhiteThreshold(
    instance: number,
    threshold: number,
    channels: number,
    exception: number,
  ): void;
  _MagickImage_WriteBlob(
    instance: number,
    settings: number,
    length: number,
    exception: number,
  ): number;
  _MagickImage_WriteFile(
    instance: number,
    settings: number,
    exception: number,
  ): void;
  _MagickImage_WriteStream(
    instance: number,
    settings: number,
    writer: number,
    seeker: number,
    teller: number,
    reader: number,
    exception: number,
  ): void;
  _MagickImageCollection_Append(
    images: number,
    stack: number,
    exception: number,
  ): number;
  _MagickImageCollection_Coalesce(images: number, exception: number): number;
  _MagickImageCollection_Combine(
    images: number,
    colorSpace: number,
    exception: number,
  ): number;
  _MagickImageCollection_Complex(
    images: number,
    complexOperator: number,
    exception: number,
  ): number;
  _MagickImageCollection_Deconstruct(images: number, exception: number): number;
  _MagickImageCollection_Dispose(images: number): void;
  _MagickImageCollection_Evaluate(
    images: number,
    evaluateOperator: number,
    exception: number,
  ): number;
  _MagickImageCollection_Map(
    images: number,
    settings: number,
    remapImage: number,
    exception: number,
  ): void;
  _MagickImageCollection_Merge(
    images: number,
    method: number,
    exception: number,
  ): number;
  _MagickImageCollection_Montage(
    images: number,
    settings: number,
    exception: number,
  ): number;
  _MagickImageCollection_Morph(
    images: number,
    frames: number,
    exception: number,
  ): number;
  _MagickImageCollection_Optimize(images: number, exception: number): number;
  _MagickImageCollection_OptimizePlus(
    images: number,
    exception: number,
  ): number;
  _MagickImageCollection_OptimizeTransparency(
    images: number,
    exception: number,
  ): void;
  _MagickImageCollection_Polynomial(
    instance: number,
    terms: number,
    length: number,
    exception: number,
  ): number;
  _MagickImageCollection_Quantize(
    images: number,
    settings: number,
    exception: number,
  ): void;
  _MagickImageCollection_ReadBlob(
    settings: number,
    data: number,
    offset: number,
    length: number,
    exception: number,
  ): number;
  _MagickImageCollection_ReadFile(settings: number, exception: number): number;
  _MagickImageCollection_ReadStream(
    settings: number,
    reader: number,
    seeker: number,
    teller: number,
    exception: number,
  ): number;
  _MagickImageCollection_Smush(
    image: number,
    offset: number,
    stack: number,
    exception: number,
  ): number;
  _MagickImageCollection_WriteFile(
    image: number,
    settings: number,
    exception: number,
  ): void;
  _MagickImageCollection_WriteStream(
    image: number,
    settings: number,
    writer: number,
    seeker: number,
    teller: number,
    reader: number,
    exception: number,
  ): void;
  _DoubleMatrix_Create(values: number, order: number): number;
  _DoubleMatrix_Dispose(instance: number): void;
  _OpenCL_GetDevices(length: number): number;
  _OpenCL_GetDevice(devices: number, index: number): number;
  _OpenCL_SetEnabled(value: number): number;
  _OpenCLDevice_DeviceType_Get(device: number): number;
  _OpenCLDevice_BenchmarkScore_Get(device: number): number;
  _OpenCLDevice_IsEnabled_Get(device: number): number;
  _OpenCLDevice_IsEnabled_Set(device: number, value: number): void;
  _OpenCLDevice_Name_Get(device: number): number;
  _OpenCLDevice_Version_Get(device: number): number;
  _OpenCLDevice_GetKernelProfileRecords(device: number, length: number): number;
  _OpenCLDevice_GetKernelProfileRecord(records: number, index: number): number;
  _OpenCLDevice_SetProfileKernels(device: number, value: number): void;
  _OpenCLKernelProfileRecord_Count_Get(record: number): number;
  _OpenCLKernelProfileRecord_Name_Get(record: number): number;
  _OpenCLKernelProfileRecord_MaximumDuration_Get(record: number): number;
  _OpenCLKernelProfileRecord_MinimumDuration_Get(record: number): number;
  _OpenCLKernelProfileRecord_TotalDuration_Get(record: number): number;
  _JpegOptimizer_CompressFile(
    input: number,
    output: number,
    progressive: number,
    lossless: number,
    quality: number,
    exception: number,
  ): void;
  _JpegOptimizer_CompressStream(
    reader: number,
    writer: number,
    progressive: number,
    lossless: number,
    quality: number,
    exception: number,
  ): void;
  _PixelCollection_Create(image: number, exception: number): number;
  _PixelCollection_Dispose(instance: number): void;
  _PixelCollection_GetArea(
    instance: number,
    x: number,
    y: number,
    width: number,
    height: number,
    exception: number,
  ): number;
  _PixelCollection_SetArea(
    instance: number,
    x: number,
    y: number,
    width: number,
    height: number,
    values: number,
    length: number,
    exception: number,
  ): void;
  _PixelCollection_ToByteArray(
    instance: number,
    x: number,
    y: number,
    width: number,
    height: number,
    mapping: number,
    exception: number,
  ): number;
  _PixelCollection_ToShortArray(
    instance: number,
    x: number,
    y: number,
    width: number,
    height: number,
    mapping: number,
    exception: number,
  ): number;
  _Quantum_Depth_Get(): number;
  _Quantum_Max_Get(): quantum;
  _Quantum_ScaleToByte(value: quantum): number;
  _ResourceLimits_Area_Get(): number;
  _ResourceLimits_Area_Set(limit: number): void;
  _ResourceLimits_Disk_Get(): number;
  _ResourceLimits_Disk_Set(limit: number): void;
  _ResourceLimits_Height_Get(): number;
  _ResourceLimits_Height_Set(limit: number): void;
  _ResourceLimits_ListLength_Get(): number;
  _ResourceLimits_ListLength_Set(limit: number): void;
  _ResourceLimits_Memory_Get(): number;
  _ResourceLimits_Memory_Set(limit: number): void;
  _ResourceLimits_Thread_Get(): number;
  _ResourceLimits_Thread_Set(limit: number): void;
  _ResourceLimits_Throttle_Get(): number;
  _ResourceLimits_Throttle_Set(limit: number): void;
  _ResourceLimits_Width_Get(): number;
  _ResourceLimits_Width_Set(limit: number): void;
  _ResourceLimits_LimitMemory(percentage: number): void;
  _DrawingSettings_Create(): number;
  _DrawingSettings_Dispose(instance: number): void;
  _DrawingSettings_BorderColor_Get(instance: number): number;
  _DrawingSettings_BorderColor_Set(instance: number, value: number): void;
  _DrawingSettings_FillColor_Get(instance: number): number;
  _DrawingSettings_FillColor_Set(instance: number, value: number): void;
  _DrawingSettings_FillRule_Get(instance: number): number;
  _DrawingSettings_FillRule_Set(instance: number, value: number): void;
  _DrawingSettings_Font_Get(instance: number): number;
  _DrawingSettings_Font_Set(instance: number, value: number): void;
  _DrawingSettings_FontFamily_Get(instance: number): number;
  _DrawingSettings_FontFamily_Set(instance: number, value: number): void;
  _DrawingSettings_FontPointsize_Get(instance: number): number;
  _DrawingSettings_FontPointsize_Set(instance: number, value: number): void;
  _DrawingSettings_FontStyle_Get(instance: number): number;
  _DrawingSettings_FontStyle_Set(instance: number, value: number): void;
  _DrawingSettings_FontWeight_Get(instance: number): number;
  _DrawingSettings_FontWeight_Set(instance: number, value: number): void;
  _DrawingSettings_StrokeAntiAlias_Get(instance: number): number;
  _DrawingSettings_StrokeAntiAlias_Set(instance: number, value: number): void;
  _DrawingSettings_StrokeColor_Get(instance: number): number;
  _DrawingSettings_StrokeColor_Set(instance: number, value: number): void;
  _DrawingSettings_StrokeDashOffset_Get(instance: number): number;
  _DrawingSettings_StrokeDashOffset_Set(instance: number, value: number): void;
  _DrawingSettings_StrokeLineCap_Get(instance: number): number;
  _DrawingSettings_StrokeLineCap_Set(instance: number, value: number): void;
  _DrawingSettings_StrokeLineJoin_Get(instance: number): number;
  _DrawingSettings_StrokeLineJoin_Set(instance: number, value: number): void;
  _DrawingSettings_StrokeMiterLimit_Get(instance: number): number;
  _DrawingSettings_StrokeMiterLimit_Set(instance: number, value: number): void;
  _DrawingSettings_StrokeWidth_Get(instance: number): number;
  _DrawingSettings_StrokeWidth_Set(instance: number, value: number): void;
  _DrawingSettings_TextAntiAlias_Get(instance: number): number;
  _DrawingSettings_TextAntiAlias_Set(instance: number, value: number): void;
  _DrawingSettings_TextDirection_Get(instance: number): number;
  _DrawingSettings_TextDirection_Set(instance: number, value: number): void;
  _DrawingSettings_TextEncoding_Get(instance: number): number;
  _DrawingSettings_TextEncoding_Set(instance: number, value: number): void;
  _DrawingSettings_TextGravity_Get(instance: number): number;
  _DrawingSettings_TextGravity_Set(instance: number, value: number): void;
  _DrawingSettings_TextInterlineSpacing_Get(instance: number): number;
  _DrawingSettings_TextInterlineSpacing_Set(
    instance: number,
    value: number,
  ): void;
  _DrawingSettings_TextInterwordSpacing_Get(instance: number): number;
  _DrawingSettings_TextInterwordSpacing_Set(
    instance: number,
    value: number,
  ): void;
  _DrawingSettings_TextKerning_Get(instance: number): number;
  _DrawingSettings_TextKerning_Set(instance: number, value: number): void;
  _DrawingSettings_TextUnderColor_Get(instance: number): number;
  _DrawingSettings_TextUnderColor_Set(instance: number, value: number): void;
  _DrawingSettings_SetAffine(
    instance: number,
    scaleX: number,
    scaleY: number,
    shearX: number,
    shearY: number,
    translateX: number,
    translateY: number,
  ): void;
  _DrawingSettings_SetFillPattern(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingSettings_SetStrokeDashArray(
    instance: number,
    value: number,
    length: number,
  ): void;
  _DrawingSettings_SetStrokePattern(
    instance: number,
    value: number,
    exception: number,
  ): void;
  _DrawingSettings_SetText(instance: number, value: number): void;
  _MagickSettings_Create(): number;
  _MagickSettings_Dispose(instance: number): void;
  _MagickSettings_AntiAlias_Get(instance: number): number;
  _MagickSettings_AntiAlias_Set(instance: number, value: number): void;
  _MagickSettings_BackgroundColor_Get(instance: number): number;
  _MagickSettings_BackgroundColor_Set(instance: number, value: number): void;
  _MagickSettings_ColorSpace_Get(instance: number): number;
  _MagickSettings_ColorSpace_Set(instance: number, value: number): void;
  _MagickSettings_ColorType_Get(instance: number): number;
  _MagickSettings_ColorType_Set(instance: number, value: number): void;
  _MagickSettings_Compression_Get(instance: number): number;
  _MagickSettings_Compression_Set(instance: number, value: number): void;
  _MagickSettings_Debug_Get(instance: number): number;
  _MagickSettings_Debug_Set(instance: number, value: number): void;
  _MagickSettings_Density_Get(instance: number): number;
  _MagickSettings_Density_Set(instance: number, value: number): void;
  _MagickSettings_Depth_Get(instance: number): number;
  _MagickSettings_Depth_Set(instance: number, value: number): void;
  _MagickSettings_Endian_Get(instance: number): number;
  _MagickSettings_Endian_Set(instance: number, value: number): void;
  _MagickSettings_Extract_Get(instance: number): number;
  _MagickSettings_Extract_Set(instance: number, value: number): void;
  _MagickSettings_Format_Get(instance: number): number;
  _MagickSettings_Format_Set(instance: number, value: number): void;
  _MagickSettings_Font_Get(instance: number): number;
  _MagickSettings_Font_Set(instance: number, value: number): void;
  _MagickSettings_FontPointsize_Get(instance: number): number;
  _MagickSettings_FontPointsize_Set(instance: number, value: number): void;
  _MagickSettings_Interlace_Get(instance: number): number;
  _MagickSettings_Interlace_Set(instance: number, value: number): void;
  _MagickSettings_Monochrome_Get(instance: number): number;
  _MagickSettings_Monochrome_Set(instance: number, value: number): void;
  _MagickSettings_Verbose_Get(instance: number): number;
  _MagickSettings_Verbose_Set(instance: number, value: number): void;
  _MagickSettings_SetColorFuzz(instance: number, value: number): void;
  _MagickSettings_SetFileName(instance: number, value: number): void;
  _MagickSettings_SetNumberScenes(instance: number, value: number): void;
  _MagickSettings_SetOption(instance: number, key: number, value: number): void;
  _MagickSettings_SetPage(instance: number, value: number): void;
  _MagickSettings_SetPing(instance: number, value: number): void;
  _MagickSettings_SetQuality(instance: number, value: number): void;
  _MagickSettings_SetScenes(instance: number, value: number): void;
  _MagickSettings_SetScene(instance: number, value: number): void;
  _MagickSettings_SetSize(instance: number, value: number): void;
  _MontageSettings_Create(): number;
  _MontageSettings_Dispose(instance: number): void;
  _MontageSettings_SetBackgroundColor(instance: number, value: number): void;
  _MontageSettings_SetBorderColor(instance: number, value: number): void;
  _MontageSettings_SetBorderWidth(instance: number, value: number): void;
  _MontageSettings_SetFillColor(instance: number, value: number): void;
  _MontageSettings_SetFont(instance: number, value: number): void;
  _MontageSettings_SetFontPointsize(instance: number, value: number): void;
  _MontageSettings_SetFrameGeometry(instance: number, value: number): void;
  _MontageSettings_SetGeometry(instance: number, value: number): void;
  _MontageSettings_SetGravity(instance: number, value: number): void;
  _MontageSettings_SetShadow(instance: number, value: number): void;
  _MontageSettings_SetStrokeColor(instance: number, value: number): void;
  _MontageSettings_SetTextureFileName(instance: number, value: number): void;
  _MontageSettings_SetTileGeometry(instance: number, value: number): void;
  _MontageSettings_SetTitle(instance: number, value: number): void;
  _QuantizeSettings_Create(): number;
  _QuantizeSettings_Dispose(instance: number): void;
  _QuantizeSettings_SetColors(instance: number, value: number): void;
  _QuantizeSettings_SetColorSpace(instance: number, value: number): void;
  _QuantizeSettings_SetDitherMethod(instance: number, value: number): void;
  _QuantizeSettings_SetMeasureErrors(instance: number, value: number): void;
  _QuantizeSettings_SetTreeDepth(instance: number, value: number): void;
  _ChannelMoments_Centroid_Get(instance: number): number;
  _ChannelMoments_EllipseAngle_Get(instance: number): number;
  _ChannelMoments_EllipseAxis_Get(instance: number): number;
  _ChannelMoments_EllipseEccentricity_Get(instance: number): number;
  _ChannelMoments_EllipseIntensity_Get(instance: number): number;
  _ChannelMoments_GetHuInvariants(instance: number, index: number): number;
  _ChannelPerceptualHash_GetHclpHuPhash(
    instance: number,
    index: number,
  ): number;
  _ChannelPerceptualHash_GetSrgbHuPhash(
    instance: number,
    index: number,
  ): number;
  _ChannelStatistics_Depth_Get(instance: number): number;
  _ChannelStatistics_Entropy_Get(instance: number): number;
  _ChannelStatistics_Kurtosis_Get(instance: number): number;
  _ChannelStatistics_Maximum_Get(instance: number): number;
  _ChannelStatistics_Mean_Get(instance: number): number;
  _ChannelStatistics_Minimum_Get(instance: number): number;
  _ChannelStatistics_Skewness_Get(instance: number): number;
  _ChannelStatistics_StandardDeviation_Get(instance: number): number;
  _ChannelStatistics_Sum_Get(instance: number): number;
  _ChannelStatistics_SumCubed_Get(instance: number): number;
  _ChannelStatistics_SumFourthPower_Get(instance: number): number;
  _ChannelStatistics_SumSquared_Get(instance: number): number;
  _ChannelStatistics_Variance_Get(instance: number): number;
  _Moments_DisposeList(list: number): void;
  _Moments_GetInstance(list: number, channel: number): number;
  _PerceptualHash_DisposeList(list: number): void;
  _PerceptualHash_GetInstance(
    instance: number,
    list: number,
    channel: number,
  ): number;
  _Statistics_DisposeList(list: number): void;
  _Statistics_GetInstance(list: number, channel: number): number;
  _ConnectedComponent_DisposeList(list: number): void;
  _ConnectedComponent_GetArea(instance: number): number;
  _ConnectedComponent_GetCentroid(instance: number): number;
  _ConnectedComponent_GetColor(instance: number): number;
  _ConnectedComponent_GetHeight(instance: number): number;
  _ConnectedComponent_GetId(instance: number): number;
  _ConnectedComponent_GetWidth(instance: number): number;
  _ConnectedComponent_GetX(instance: number): number;
  _ConnectedComponent_GetY(instance: number): number;
  _ConnectedComponent_GetInstance(list: number, index: number): number;
  _MagickGeometry_Create(): number;
  _MagickGeometry_Dispose(instance: number): void;
  _MagickGeometry_X_Get(instance: number): number;
  _MagickGeometry_Y_Get(instance: number): number;
  _MagickGeometry_Width_Get(instance: number): number;
  _MagickGeometry_Height_Get(instance: number): number;
  _MagickGeometry_Initialize(instance: number, geometry: number): number;
  _MagickRectangle_Create(): number;
  _MagickRectangle_Dispose(instance: number): void;
  _MagickRectangle_X_Get(instance: number): number;
  _MagickRectangle_X_Set(instance: number, value: number): void;
  _MagickRectangle_Y_Get(instance: number): number;
  _MagickRectangle_Y_Set(instance: number, value: number): void;
  _MagickRectangle_Width_Get(instance: number): number;
  _MagickRectangle_Width_Set(instance: number, value: number): void;
  _MagickRectangle_Height_Get(instance: number): number;
  _MagickRectangle_Height_Set(instance: number, value: number): void;
  _MagickRectangle_Initialize(instance: number, value: number): void;
  _OffsetInfo_Create(): number;
  _OffsetInfo_Dispose(instance: number): void;
  _OffsetInfo_SetX(instance: number, value: number): void;
  _OffsetInfo_SetY(instance: number, value: number): void;
  _PointInfo_X_Get(instance: number): number;
  _PointInfo_Y_Get(instance: number): number;
  _PrimaryInfo_Create(): number;
  _PrimaryInfo_Dispose(instance: number): void;
  _PrimaryInfo_X_Get(instance: number): number;
  _PrimaryInfo_X_Set(instance: number, value: number): void;
  _PrimaryInfo_Y_Get(instance: number): number;
  _PrimaryInfo_Y_Set(instance: number, value: number): void;
  _PrimaryInfo_Z_Get(instance: number): number;
  _PrimaryInfo_Z_Set(instance: number, value: number): void;
  _StringInfo_Length_Get(instance: number): number;
  _StringInfo_Datum_Get(instance: number): number;
  _TypeMetric_Create(): number;
  _TypeMetric_Dispose(instance: number): void;
  _TypeMetric_Ascent_Get(instance: number): number;
  _TypeMetric_Descent_Get(instance: number): number;
  _TypeMetric_MaxHorizontalAdvance_Get(instance: number): number;
  _TypeMetric_TextHeight_Get(instance: number): number;
  _TypeMetric_TextWidth_Get(instance: number): number;
  _TypeMetric_UnderlinePosition_Get(instance: number): number;
  _TypeMetric_UnderlineThickness_Get(instance: number): number;
}

declare const MagickNative: () => Promise<ImageMagickApi>;
export default MagickNativeWasm as MagickNative;
