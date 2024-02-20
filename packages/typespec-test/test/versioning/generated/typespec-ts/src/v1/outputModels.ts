// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface WidgetOutput {
  id: string;
  weight: number;
  color: "red" | "blue";
  foo: string;
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
