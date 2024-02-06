// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/ServiceContext.js";
import { three, four } from "../../api/foo/index.js";
import { FooThreeOptions, FooFourOptions } from "../../models/options.js";

export interface FooOperations {
  three: (options?: FooThreeOptions) => Promise<void>;
  four: (options?: FooFourOptions) => Promise<void>;
}

export function getFoo(context: ServiceContext) {
  return {
    three: (options?: FooThreeOptions) => three(context, options),
    four: (options?: FooFourOptions) => four(context, options),
  };
}

export function getFooOperations(context: ServiceContext): FooOperations {
  return {
    ...getFoo(context),
  };
}
