// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface WidgetOutput {
  id: string;
  weight: number;
  color: "red" | "blue";
}

export interface Widget1Output extends WidgetOutput {
  data: WidgetData0Output | WidgetData1Output;
}

export interface WidgetData0Output {
  fooProp: string;
}

export interface WidgetData1Output {
  barProp: string;
}

export interface Widget2Output extends WidgetOutput {
  data: WidgetData0Output | WidgetData2Output;
}

export interface WidgetData2Output {
  foo_prop: string;
}

export interface Widget3Output extends WidgetOutput {
  data: WidgetData1Output | WidgetData2Output;
}

export interface Widget4Output extends WidgetOutput {
  data: WidgetData2Output | WidgetData3Output;
}

export interface WidgetData3Output {
  bar_prop: string;
}

export interface Widget5Output extends WidgetOutput {
  data: Array<WidgetData0Output> | Array<WidgetData1Output>;
}

export interface Widget6Output extends WidgetOutput {
  data: Array<WidgetData0Output> | Array<WidgetData2Output>;
}

export interface Widget7Output extends WidgetOutput {
  data: Array<WidgetData1Output> | Array<WidgetData2Output>;
}

export interface Widget8Output extends WidgetOutput {
  data: Array<WidgetData2Output> | Array<WidgetData3Output>;
}

export interface Widget9Output extends WidgetOutput {
  data: Array<WidgetData0Output> | WidgetData1Output;
}

export interface Widget10Output extends WidgetOutput {
  data: WidgetData0Output | Array<WidgetData1Output>;
}

export interface Widget11Output extends WidgetOutput {
  data: Array<WidgetData0Output> | WidgetData2Output;
}

export interface Widget12Output extends WidgetOutput {
  data: WidgetData0Output | Array<WidgetData2Output>;
}

export interface Widget13Output extends WidgetOutput {
  data: Array<WidgetData1Output> | WidgetData2Output;
}

export interface Widget14Output extends WidgetOutput {
  data: WidgetData1Output | Array<WidgetData2Output>;
}

export interface Widget15Output extends WidgetOutput {
  data: Array<WidgetData2Output> | WidgetData3Output;
}

export interface Widget16Output extends WidgetOutput {
  data: WidgetData2Output | Array<WidgetData3Output>;
}

export interface ErrorModelOutput {
  code: number;
  message: string;
}

/** Paged response of Widget items */
export interface WidgetCollectionWithNextLinkOutput {
  /** The items on this page */
  value: Array<WidgetOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}
