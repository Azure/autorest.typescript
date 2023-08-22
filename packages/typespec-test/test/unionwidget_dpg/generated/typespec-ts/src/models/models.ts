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

export interface Widget1 {
  data: WidgetData0 | WidgetData1;
}

export interface WidgetData0 {
  fooProp: string;
}

export interface WidgetData1 {
  barProp: string;
}

export interface Widget2 {
  data: WidgetData0 | WidgetData2;
}

export interface WidgetData2 {
  fooProp: string;
}

export interface Widget3 {
  data: WidgetData1 | WidgetData2;
}

export interface Widget4 {
  data: WidgetData2 | WidgetData3;
}

export interface WidgetData3 {
  barProp: string;
}

export interface Widget5 {
  data: WidgetData0[] | WidgetData1[];
}

export interface Widget6 {
  data: WidgetData0[] | WidgetData2[];
}

export interface Widget7 {
  data: WidgetData1[] | WidgetData2[];
}

export interface Widget8 {
  data: WidgetData2[] | WidgetData3[];
}

export interface Widget9 {
  data: WidgetData0[] | WidgetData1;
}

export interface Widget10 {
  data: WidgetData0 | WidgetData1[];
}

export interface Widget11 {
  data: WidgetData0[] | WidgetData2;
}

export interface Widget12 {
  data: WidgetData0 | WidgetData2[];
}

export interface Widget13 {
  data: WidgetData1[] | WidgetData2;
}

export interface Widget14 {
  data: WidgetData1 | WidgetData2[];
}

export interface Widget15 {
  data: WidgetData2[] | WidgetData3;
}

export interface Widget16 {
  data: WidgetData2 | WidgetData3[];
}
