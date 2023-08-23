// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Widget {
  readonly id: string;
  weight: number;
  color: ColorType;
}

/** Type of ColorType */
/** */
export type ColorType = "red" | "blue";

export interface Widget1 extends Widget {
  data: WidgetData0 | WidgetData1;
}

export interface WidgetData0 {
  fooProp: string;
}

export interface WidgetData1 {
  barProp: string;
}

export interface Widget2 extends Widget {
  data: WidgetData0 | WidgetData2;
}

export interface WidgetData2 {
  fooProp: string;
}

export interface Widget3 extends Widget {
  data: WidgetData1 | WidgetData2;
}

export interface Widget4 extends Widget {
  data: WidgetData2 | WidgetData3;
}

export interface WidgetData3 {
  barProp: string;
}

export interface Widget5 extends Widget {
  data: WidgetData0 | WidgetData4;
}

export interface WidgetData4 {
  start: Date;
  end?: Date;
}

export interface Widget6 extends Widget {
  data: WidgetData0 | WidgetData5;
}

export interface WidgetData5 {
  data: Uint8Array;
}

export interface Widget7 extends Widget {
  data: WidgetData0[] | WidgetData1[];
}

export interface Widget8 extends Widget {
  data: WidgetData0[] | WidgetData2[];
}

export interface Widget9 extends Widget {
  data: WidgetData1[] | WidgetData2[];
}

export interface Widget10 extends Widget {
  data: WidgetData2[] | WidgetData3[];
}

export interface Widget11 extends Widget {
  data: WidgetData0[] | WidgetData4[];
}

export interface Widget12 extends Widget {
  data: WidgetData0[] | WidgetData5[];
}

export interface Widget13 extends Widget {
  data: WidgetData0[] | WidgetData1;
}

export interface Widget14 extends Widget {
  data: WidgetData0 | WidgetData1[];
}

export interface Widget15 extends Widget {
  data: WidgetData0[] | WidgetData2;
}

export interface Widget16 extends Widget {
  data: WidgetData0 | WidgetData2[];
}

export interface Widget17 extends Widget {
  data: WidgetData1[] | WidgetData2;
}

export interface Widget18 extends Widget {
  data: WidgetData1 | WidgetData2[];
}

export interface Widget19 extends Widget {
  data: WidgetData2[] | WidgetData3;
}

export interface Widget20 extends Widget {
  data: WidgetData2 | WidgetData3[];
}

export interface Widget21 extends Widget {
  data: WidgetData0[] | WidgetData4;
}

export interface Widget22 extends Widget {
  data: WidgetData0 | WidgetData4[];
}

export interface Widget23 extends Widget {
  data: WidgetData0[] | WidgetData5;
}

export interface Widget24 extends Widget {
  data: WidgetData0 | WidgetData5[];
}
