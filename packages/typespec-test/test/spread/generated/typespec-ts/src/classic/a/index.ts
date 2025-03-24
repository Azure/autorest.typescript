// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DemoServiceContext } from "../../api/demoServiceContext.js";
import {
  ATest4OptionalParams,
  ATest3OptionalParams,
  ATest2OptionalParams,
  ATest1OptionalParams,
} from "../../api/a/options.js";
import { test4, test3, test2, test1 } from "../../api/a/operations.js";

/** Interface representing a A operations. */
export interface AOperations {
  test4: (
    body: {
      prop: string;
    },
    options?: ATest4OptionalParams,
  ) => Promise<void>;
  test3: (
    body: {
      prop: string;
    },
    options?: ATest3OptionalParams,
  ) => Promise<void>;
  test2: (prop: string, options?: ATest2OptionalParams) => Promise<void>;
  test1: (
    a: string,
    b: string,
    c: string,
    options?: ATest1OptionalParams,
  ) => Promise<void>;
}

function _getA(context: DemoServiceContext) {
  return {
    test4: (
      body: {
        prop: string;
      },
      options?: ATest4OptionalParams,
    ) => test4(context, body, options),
    test3: (
      body: {
        prop: string;
      },
      options?: ATest3OptionalParams,
    ) => test3(context, body, options),
    test2: (prop: string, options?: ATest2OptionalParams) =>
      test2(context, prop, options),
    test1: (a: string, b: string, c: string, options?: ATest1OptionalParams) =>
      test1(context, a, b, c, options),
  };
}

export function _getAOperations(context: DemoServiceContext): AOperations {
  return {
    ..._getA(context),
  };
}
