// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  durationValueGet,
  durationValuePut,
} from "../../api/durationValue/index.js";
import {
  DurationValueGetOptionalParams,
  DurationValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a DurationValue operations. */
export interface DurationValueOperations {
  get: (options?: DurationValueGetOptionalParams) => Promise<string[]>;
  put: (
    body: string[],
    options?: DurationValuePutOptionalParams,
  ) => Promise<void>;
}

export function getDurationValue(context: ArrayContext) {
  return {
    get: (options?: DurationValueGetOptionalParams) =>
      durationValueGet(context, options),
    put: (body: string[], options?: DurationValuePutOptionalParams) =>
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
