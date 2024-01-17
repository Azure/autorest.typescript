// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext } from "../../api/DurationContext.js";
import {
  headerDefault,
  headerIso8601,
  headerIso8601Array,
  headerInt32Seconds,
  headerFloatSeconds,
} from "../../api/header/index.js";
import {
  HeaderDefaultOptions,
  HeaderIso8601Options,
  HeaderIso8601ArrayOptions,
  HeaderInt32SecondsOptions,
  HeaderFloatSecondsOptions,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (duration: string, options?: HeaderDefaultOptions) => Promise<void>;
  iso8601: (duration: string, options?: HeaderIso8601Options) => Promise<void>;
  iso8601Array: (
    duration: string[],
    options?: HeaderIso8601ArrayOptions,
  ) => Promise<void>;
  int32Seconds: (
    duration: number,
    options?: HeaderInt32SecondsOptions,
  ) => Promise<void>;
  floatSeconds: (
    duration: number,
    options?: HeaderFloatSecondsOptions,
  ) => Promise<void>;
}

export function getHeader(context: DurationContext) {
  return {
    default: (duration: string, options?: HeaderDefaultOptions) =>
      headerDefault(context, duration, options),
    iso8601: (duration: string, options?: HeaderIso8601Options) =>
      headerIso8601(context, duration, options),
    iso8601Array: (duration: string[], options?: HeaderIso8601ArrayOptions) =>
      headerIso8601Array(context, duration, options),
    int32Seconds: (duration: number, options?: HeaderInt32SecondsOptions) =>
      headerInt32Seconds(context, duration, options),
    floatSeconds: (duration: number, options?: HeaderFloatSecondsOptions) =>
      headerFloatSeconds(context, duration, options),
  };
}

export function getHeaderOperations(
  context: DurationContext,
): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
