// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TestModel as TestModelRest } from "../rest/index.js";

export interface TestModel {
  prop: string;
  changedProp: string;
}

export function testModelSerializer(item: TestModel): TestModelRest {
  return {
    prop: item["prop"],
    changedProp: item["changedProp"],
  };
}

/** The version of the API. */
/** */
export type Versions = "v1" | "v2";
