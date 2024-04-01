// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  durationValueGet,
  durationValuePut,
} from "../../api/durationValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface DurationValueOperations {
  get: (options?: GetOptions) => Promise<string[]>;
  put: (body: string[], options?: PutOptions) => Promise<void>;
}

export function getDurationValue(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => durationValueGet(context, options),
    put: (body: string[], options?: PutOptions) =>
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
