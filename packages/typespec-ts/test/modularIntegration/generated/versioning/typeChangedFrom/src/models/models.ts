// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface TestModel {
  prop: string;
  changedProp: string;
}

export function testModelSerializer(item: TestModel): Record<string, unknown> {
  return {
    prop: item["prop"],
    changedProp: item["changedProp"],
  };
}

/** The version of the API. */
export type Versions = "v1" | "v2";
