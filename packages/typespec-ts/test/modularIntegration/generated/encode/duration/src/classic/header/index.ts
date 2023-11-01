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
  headerDefault: (
    duration: string,
    options?: HeaderHeaderDefaultOptions
  ) => Promise<void>;
  headerIso8601: (
    duration: string,
    options?: HeaderHeaderIso8601Options
  ) => Promise<void>;
  headerIso8601Array: (
    duration: string[],
    options?: HeaderHeaderIso8601ArrayOptions
  ) => Promise<void>;
  headerInt32Seconds: (
    duration: number,
    options?: HeaderHeaderInt32SecondsOptions
  ) => Promise<void>;
  headerFloatSeconds: (
    duration: number,
    options?: HeaderHeaderFloatSecondsOptions
  ) => Promise<void>;
}

export function getHeader(context: DurationContext) {
  return {
    headerDefault: (duration: string, options?: HeaderHeaderDefaultOptions) =>
      headerDefault(context, duration, options),
    headerIso8601: (duration: string, options?: HeaderHeaderIso8601Options) =>
      headerIso8601(context, duration, options),
    headerIso8601Array: (
      duration: string[],
      options?: HeaderHeaderIso8601ArrayOptions
    ) => headerIso8601Array(context, duration, options),
    headerInt32Seconds: (
      duration: number,
      options?: HeaderHeaderInt32SecondsOptions
    ) => headerInt32Seconds(context, duration, options),
    headerFloatSeconds: (
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
