// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext } from "../../api/serviceContext.js";
import { three, four } from "../../api/foo/index.js";
import {
  FooThreeOptionalParams,
  FooFourOptionalParams,
} from "../../models/options.js";

/** Interface representing a Foo operations. */
export interface FooOperations {
  three: (options?: FooThreeOptionalParams) => Promise<void>;
  four: (options?: FooFourOptionalParams) => Promise<void>;
}

export function getFoo(context: ServiceContext) {
  return {
    three: (options?: FooThreeOptionalParams) => three(context, options),
    four: (options?: FooFourOptionalParams) => four(context, options),
  };
}

export function getFooOperations(context: ServiceContext): FooOperations {
  return {
    ...getFoo(context),
  };
}
