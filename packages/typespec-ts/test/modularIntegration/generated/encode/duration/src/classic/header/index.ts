// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext } from "../../api/durationContext.js";
import {
  headerDefault,
  headerIso8601,
  headerIso8601Array,
  headerInt32Seconds,
  headerFloatSeconds,
  headerFloat64Seconds,
} from "../../api/header/index.js";
import {
  HeaderDefaultOptionalParams,
  HeaderIso8601OptionalParams,
  HeaderIso8601ArrayOptionalParams,
  HeaderInt32SecondsOptionalParams,
  HeaderFloatSecondsOptionalParams,
  HeaderFloat64SecondsOptionalParams,
} from "../../models/options.js";

/** Interface representing a Header operations. */
export interface HeaderOperations {
  default: (
    duration: string,
    options?: HeaderDefaultOptionalParams,
  ) => Promise<void>;
  iso8601: (
    duration: string,
    options?: HeaderIso8601OptionalParams,
  ) => Promise<void>;
  iso8601Array: (
    duration: string[],
    options?: HeaderIso8601ArrayOptionalParams,
  ) => Promise<void>;
  int32Seconds: (
    duration: number,
    options?: HeaderInt32SecondsOptionalParams,
  ) => Promise<void>;
  floatSeconds: (
    duration: number,
    options?: HeaderFloatSecondsOptionalParams,
  ) => Promise<void>;
  float64Seconds: (
    duration: number,
    options?: HeaderFloat64SecondsOptionalParams,
  ) => Promise<void>;
}

export function getHeader(context: DurationContext) {
  return {
    default: (duration: string, options?: HeaderDefaultOptionalParams) =>
      headerDefault(context, duration, options),
    iso8601: (duration: string, options?: HeaderIso8601OptionalParams) =>
      headerIso8601(context, duration, options),
    iso8601Array: (
      duration: string[],
      options?: HeaderIso8601ArrayOptionalParams,
    ) => headerIso8601Array(context, duration, options),
    int32Seconds: (
      duration: number,
      options?: HeaderInt32SecondsOptionalParams,
    ) => headerInt32Seconds(context, duration, options),
    floatSeconds: (
      duration: number,
      options?: HeaderFloatSecondsOptionalParams,
    ) => headerFloatSeconds(context, duration, options),
    float64Seconds: (
      duration: number,
      options?: HeaderFloat64SecondsOptionalParams,
    ) => headerFloat64Seconds(context, duration, options),
  };
}

export function getHeaderOperations(
  context: DurationContext,
): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
