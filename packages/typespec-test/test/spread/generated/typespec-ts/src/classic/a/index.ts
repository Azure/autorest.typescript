// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DemoServiceContext } from "../../api/demoServiceContext.js";
import { Test } from "../../models/models.js";
import { test1, test2, test3, test4 } from "../../api/a/index.js";
import {
  ATest1OptionalParams,
  ATest2OptionalParams,
  ATest3OptionalParams,
  ATest4OptionalParams,
} from "../../models/options.js";

export interface AOperations {
  test1: (
    a: string,
    b: string,
    c: string,
    options?: ATest1OptionalParams,
  ) => Promise<void>;
  test2: (body: Test, options?: ATest2OptionalParams) => Promise<void>;
  test3: (prop: string, options?: ATest3OptionalParams) => Promise<void>;
  test4: (body: Test, options?: ATest4OptionalParams) => Promise<void>;
}

export function getA(context: DemoServiceContext) {
  return {
    test1: (a: string, b: string, c: string, options?: ATest1OptionalParams) =>
      test1(context, a, b, c, options),
    test2: (body: Test, options?: ATest2OptionalParams) =>
      test2(context, body, options),
    test3: (prop: string, options?: ATest3OptionalParams) =>
      test3(context, prop, options),
    test4: (body: Test, options?: ATest4OptionalParams) =>
      test4(context, body, options),
  };
}

export function getAOperations(context: DemoServiceContext): AOperations {
  return {
    ...getA(context),
  };
}
