// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface TestModel {
  prop: string;
  changedProp?: string;
}

/** The version of the API. */
export type Versions = "v1" | "v2";
