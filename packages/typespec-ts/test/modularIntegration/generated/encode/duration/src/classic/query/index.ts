// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext } from "../../api/durationContext.js";
import {
  queryDefault,
  queryIso8601,
  queryInt32Seconds,
  queryFloatSeconds,
  queryFloat64Seconds,
  queryInt32SecondsArray,
} from "../../api/query/index.js";
import {
  QueryDefaultOptionalParams,
  QueryIso8601OptionalParams,
  QueryInt32SecondsOptionalParams,
  QueryFloatSecondsOptionalParams,
  QueryFloat64SecondsOptionalParams,
  QueryInt32SecondsArrayOptionalParams,
} from "../../api/options.js";

/** Interface representing a Query operations. */
export interface QueryOperations {
  default: (
    input: string,
    options?: QueryDefaultOptionalParams,
  ) => Promise<void>;
  iso8601: (
    input: string,
    options?: QueryIso8601OptionalParams,
  ) => Promise<void>;
  int32Seconds: (
    input: number,
    options?: QueryInt32SecondsOptionalParams,
  ) => Promise<void>;
  floatSeconds: (
    input: number,
    options?: QueryFloatSecondsOptionalParams,
  ) => Promise<void>;
  float64Seconds: (
    input: number,
    options?: QueryFloat64SecondsOptionalParams,
  ) => Promise<void>;
  int32SecondsArray: (
    input: number[],
    options?: QueryInt32SecondsArrayOptionalParams,
  ) => Promise<void>;
}

export function getQuery(context: DurationContext) {
  return {
    default: (input: string, options?: QueryDefaultOptionalParams) =>
      queryDefault(context, input, options),
    iso8601: (input: string, options?: QueryIso8601OptionalParams) =>
      queryIso8601(context, input, options),
    int32Seconds: (input: number, options?: QueryInt32SecondsOptionalParams) =>
      queryInt32Seconds(context, input, options),
    floatSeconds: (input: number, options?: QueryFloatSecondsOptionalParams) =>
      queryFloatSeconds(context, input, options),
    float64Seconds: (
      input: number,
      options?: QueryFloat64SecondsOptionalParams,
    ) => queryFloat64Seconds(context, input, options),
    int32SecondsArray: (
      input: number[],
      options?: QueryInt32SecondsArrayOptionalParams,
    ) => queryInt32SecondsArray(context, input, options),
  };
}

export function getQueryOperations(context: DurationContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
