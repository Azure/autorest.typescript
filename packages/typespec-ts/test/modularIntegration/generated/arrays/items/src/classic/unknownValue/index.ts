// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  unknownValueGet,
  unknownValuePut,
} from "../../api/unknownValue/index.js";
import {
  UnknownValueGetOptionalParams,
  UnknownValuePutOptionalParams,
} from "../../models/options.js";

export interface UnknownValueOperations {
  get: (options?: UnknownValueGetOptionalParams) => Promise<unknown[]>;
  put: (
    body: unknown[],
    options?: UnknownValuePutOptionalParams,
  ) => Promise<void>;
}

export function getUnknownValue(context: ArrayContext) {
  return {
    get: (options?: UnknownValueGetOptionalParams) =>
      unknownValueGet(context, options),
    put: (body: unknown[], options?: UnknownValuePutOptionalParams) =>
      unknownValuePut(context, body, options),
  };
}

export function getUnknownValueOperations(
  context: ArrayContext,
): UnknownValueOperations {
  return {
    ...getUnknownValue(context),
  };
}
