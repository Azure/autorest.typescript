// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DemoServiceContext } from "../../api/demoServiceContext.js";
import { test1, test2, test3, test4 } from "../../api/a/index.js";
import {
  ATest1OptionalParams,
  ATest2OptionalParams,
  ATest3OptionalParams,
  ATest4OptionalParams,
} from "../../api/options.js";

/** Interface representing a A operations. */
export interface AOperations {
  test1: (
    a: string,
    b: string,
    c: string,
    options?: ATest1OptionalParams,
  ) => Promise<void>;
  test2: (prop: string, options?: ATest2OptionalParams) => Promise<void>;
  test3: (
    body: {
      prop: string;
    },
    options?: ATest3OptionalParams,
  ) => Promise<void>;
  test4: (
    body: {
      prop: string;
    },
    options?: ATest4OptionalParams,
  ) => Promise<void>;
}

export function getA(context: DemoServiceContext) {
  return {
    test1: (a: string, b: string, c: string, options?: ATest1OptionalParams) =>
      test1(context, a, b, c, options),
    test2: (prop: string, options?: ATest2OptionalParams) =>
      test2(context, prop, options),
    test3: (
      body: {
        prop: string;
      },
      options?: ATest3OptionalParams,
    ) => test3(context, body, options),
    test4: (
      body: {
        prop: string;
      },
      options?: ATest4OptionalParams,
    ) => test4(context, body, options),
  };
}

export function getAOperations(context: DemoServiceContext): AOperations {
  return {
    ...getA(context),
  };
}
