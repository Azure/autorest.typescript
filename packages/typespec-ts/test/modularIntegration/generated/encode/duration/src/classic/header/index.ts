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
  HeaderHeaderDefaultOptions,
  HeaderHeaderIso8601Options,
  HeaderHeaderIso8601ArrayOptions,
  HeaderHeaderInt32SecondsOptions,
  HeaderHeaderFloatSecondsOptions,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (
    duration: string,
    options?: HeaderHeaderDefaultOptions
  ) => Promise<void>;
  iso8601: (
    duration: string,
    options?: HeaderHeaderIso8601Options
  ) => Promise<void>;
  iso8601Array: (
    duration: string[],
    options?: HeaderHeaderIso8601ArrayOptions
  ) => Promise<void>;
  int32Seconds: (
    duration: number,
    options?: HeaderHeaderInt32SecondsOptions
  ) => Promise<void>;
  floatSeconds: (
    duration: number,
    options?: HeaderHeaderFloatSecondsOptions
  ) => Promise<void>;
}

export function getHeader(context: DurationContext) {
  return {
    default: (duration: string, options?: HeaderHeaderDefaultOptions) =>
      headerDefault(context, duration, options),
    iso8601: (duration: string, options?: HeaderHeaderIso8601Options) =>
      headerIso8601(context, duration, options),
    iso8601Array: (
      duration: string[],
      options?: HeaderHeaderIso8601ArrayOptions
    ) => headerIso8601Array(context, duration, options),
    int32Seconds: (
      duration: number,
      options?: HeaderHeaderInt32SecondsOptions
    ) => headerInt32Seconds(context, duration, options),
    floatSeconds: (
      duration: number,
      options?: HeaderHeaderFloatSecondsOptions
    ) => headerFloatSeconds(context, duration, options),
  };
}

export function getHeaderOperations(
  context: DurationContext
): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
