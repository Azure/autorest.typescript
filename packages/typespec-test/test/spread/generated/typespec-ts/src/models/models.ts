// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Test as TestRest } from "../rest/index.js";

export interface Test {
  prop: string;
}

export function testSerializer(item: Test): TestRest {
  return {
    prop: item["prop"],
  };
}
