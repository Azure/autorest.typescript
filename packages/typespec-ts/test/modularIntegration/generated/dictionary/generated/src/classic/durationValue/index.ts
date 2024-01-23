// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import {
  durationValueGet,
  durationValuePut,
} from "../../api/durationValue/index.js";
import {
  DurationValueGetOptions,
  DurationValuePutOptions,
} from "../../models/options.js";

export interface DurationValueOperations {
  get: (options?: DurationValueGetOptions) => Promise<Record<string, string>>;
  put: (
    body: Record<string, string>,
    options?: DurationValuePutOptions,
  ) => Promise<void>;
}

export function getDurationValue(context: DictionaryContext) {
  return {
    get: (options?: DurationValueGetOptions) =>
      durationValueGet(context, options),
    put: (body: Record<string, string>, options?: DurationValuePutOptions) =>
      durationValuePut(context, body, options),
  };
}

export function getDurationValueOperations(
  context: DictionaryContext,
): DurationValueOperations {
  return {
    ...getDurationValue(context),
  };
}
