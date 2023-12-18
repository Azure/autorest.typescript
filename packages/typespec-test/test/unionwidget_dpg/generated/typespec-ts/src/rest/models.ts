// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Widget1 extends Widget {
  data: WidgetData;
}

export interface WidgetData0 {
  kind: "kind0";
  fooProp: string;
}

export interface WidgetData1 {
  kind: "kind1";
  data: string;
}

export interface Widget {
  id: string;
  weight: number;
  color: "red" | "blue";
}

export type WidgetData = WidgetData0 | WidgetData1;
