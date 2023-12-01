// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Widget {
  id: string;
  weight: number;
  color: "red" | "blue";
}

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
  foo_prop: string;
}

export interface Widget3 extends Widget {
  data: WidgetData1 | WidgetData2;
}

export interface Widget4 extends Widget {
  data: WidgetData2 | WidgetData3;
}

export interface WidgetData3 {
  bar_prop: string;
}

export interface Widget5 extends Widget {
  data: WidgetData0 | WidgetData4;
}

export interface WidgetData4 {
  start: Date | string;
  end?: Date | string;
}

export interface Widget6 extends Widget {
  data: WidgetData0 | WidgetData5;
}

export interface WidgetData5 {
  data: string;
}

export interface Widget7 extends Widget {
  data: Array<WidgetData0> | Array<WidgetData1>;
}

export interface Widget8 extends Widget {
  data: Array<WidgetData0> | Array<WidgetData2>;
}

export interface Widget9 extends Widget {
  data: Array<WidgetData1> | Array<WidgetData2>;
}

export interface Widget10 extends Widget {
  data: Array<WidgetData2> | Array<WidgetData3>;
}

export interface Widget11 extends Widget {
  data: Array<WidgetData0> | Array<WidgetData4>;
}

export interface Widget12 extends Widget {
  data: Array<WidgetData0> | Array<WidgetData5>;
}

export interface Widget13 extends Widget {
  data: Array<WidgetData0> | WidgetData1;
}

export interface Widget14 extends Widget {
  data: WidgetData0 | Array<WidgetData1>;
}

export interface Widget15 extends Widget {
  data: Array<WidgetData0> | WidgetData2;
}

export interface Widget16 extends Widget {
  data: WidgetData0 | Array<WidgetData2>;
}

export interface Widget17 extends Widget {
  data: Array<WidgetData1> | WidgetData2;
}

export interface Widget18 extends Widget {
  data: WidgetData1 | Array<WidgetData2>;
}

export interface Widget19 extends Widget {
  data: Array<WidgetData2> | WidgetData3;
}

export interface Widget20 extends Widget {
  data: WidgetData2 | Array<WidgetData3>;
}

export interface Widget21 extends Widget {
  data: Array<WidgetData0> | WidgetData4;
}

export interface Widget22 extends Widget {
  data: WidgetData0 | Array<WidgetData4>;
}

export interface Widget23 extends Widget {
  data: Array<WidgetData0> | WidgetData5;
}

export interface Widget24 extends Widget {
  data: WidgetData0 | Array<WidgetData5>;
}

export interface Widget25 extends Widget {
  data: WidgetData0 | WidgetData3 | Array<WidgetData5>;
}

export interface Widget26 extends Widget {
  data: WidgetData2 | WidgetData4 | Array<WidgetData6>;
}

export interface WidgetData6 {
  data: WidgetData5;
}