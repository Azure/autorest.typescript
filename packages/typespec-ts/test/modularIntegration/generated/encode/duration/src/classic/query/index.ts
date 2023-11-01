// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationContext } from "../../api/DurationContext.js";
import {
  queryDefault,
  queryIso8601,
  queryInt32Seconds,
  queryFloatSeconds,
  queryInt32SecondsArray,
} from "../../api/query/index.js";
import {
  QueryQueryDefaultOptions,
  QueryQueryIso8601Options,
  QueryQueryInt32SecondsOptions,
  QueryQueryFloatSecondsOptions,
  QueryQueryInt32SecondsArrayOptions,
} from "../../models/options.js";

export interface QueryOperations {
  queryDefault: (
    input: string,
    options?: QueryQueryDefaultOptions
  ) => Promise<void>;
  queryIso8601: (
    input: string,
    options?: QueryQueryIso8601Options
  ) => Promise<void>;
  queryInt32Seconds: (
    input: number,
    options?: QueryQueryInt32SecondsOptions
  ) => Promise<void>;
  queryFloatSeconds: (
    input: number,
    options?: QueryQueryFloatSecondsOptions
  ) => Promise<void>;
  queryInt32SecondsArray: (
    input: number[],
    options?: QueryQueryInt32SecondsArrayOptions
  ) => Promise<void>;
}

export function getQuery(context: DurationContext) {
  return {
    queryDefault: (input: string, options?: QueryQueryDefaultOptions) =>
      queryDefault(context, input, options),
    queryIso8601: (input: string, options?: QueryQueryIso8601Options) =>
      queryIso8601(context, input, options),
    queryInt32Seconds: (
      input: number,
      options?: QueryQueryInt32SecondsOptions
    ) => queryInt32Seconds(context, input, options),
    queryFloatSeconds: (
      input: number,
      options?: QueryQueryFloatSecondsOptions
    ) => queryFloatSeconds(context, input, options),
    queryInt32SecondsArray: (
      input: number[],
      options?: QueryQueryInt32SecondsArrayOptions
    ) => queryInt32SecondsArray(context, input, options),
  };
}

export function getQueryOperations(context: DurationContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
