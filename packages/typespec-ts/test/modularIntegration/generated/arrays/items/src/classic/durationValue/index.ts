// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  durationValueGet,
  durationValuePut,
} from "../../api/durationValue/index.js";
import {
  DurationValueGetOptions,
  DurationValuePutOptions,
} from "../../models/options.js";

export interface DurationValueOperations {
  get: (options?: DurationValueGetOptions) => Promise<string[]>;
  put: (body: string[], options?: DurationValuePutOptions) => Promise<void>;
}

export function getDurationValue(context: ArrayContext) {
  return {
    get: (options?: DurationValueGetOptions) =>
      durationValueGet(context, options),
    put: (body: string[], options?: DurationValuePutOptions) =>
      durationValuePut(context, body, options),
  };
}

export function getDurationValueOperations(
  context: ArrayContext,
): DurationValueOperations {
  return {
    ...getDurationValue(context),
  };
}
