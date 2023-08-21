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
  data: Array<WidgetData0> | Array<WidgetData1>;
}

export interface Widget6 extends Widget {
  data: Array<WidgetData0> | Array<WidgetData2>;
}

export interface Widget7 extends Widget {
  data: Array<WidgetData1> | Array<WidgetData2>;
}

export interface Widget8 extends Widget {
  data: Array<WidgetData2> | Array<WidgetData3>;
}

export interface Widget9 extends Widget {
  data: Array<WidgetData0> | WidgetData1;
}

export interface Widget10 extends Widget {
  data: WidgetData0 | Array<WidgetData1>;
}

export interface Widget11 extends Widget {
  data: Array<WidgetData0> | WidgetData2;
}

export interface Widget12 extends Widget {
  data: WidgetData0 | Array<WidgetData2>;
}

export interface Widget13 extends Widget {
  data: Array<WidgetData1> | WidgetData2;
}

export interface Widget14 extends Widget {
  data: WidgetData1 | Array<WidgetData2>;
}

export interface Widget15 extends Widget {
  data: Array<WidgetData2> | WidgetData3;
}

export interface Widget16 extends Widget {
  data: WidgetData2 | Array<WidgetData3>;
}
