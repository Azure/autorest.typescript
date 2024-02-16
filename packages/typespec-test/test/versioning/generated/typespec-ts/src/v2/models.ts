// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Widget {
  id: string;
  weight: number;
  color: "red" | "blue";
  name: string;
}

/** Resource create or update operation model. */
export interface WidgetUpdate {
  weight?: number;
  color?: "red" | "blue";
  name?: string;
}

/** Resource create operation model. */
export interface WidgetCreate {
  weight: number;
  color: "red" | "blue";
  name: string;
}
