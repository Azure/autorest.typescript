// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  unknownValueGet,
  unknownValuePut,
} from "../../api/unknownValue/index.js";
import {
  UnknownValueGetOptions,
  UnknownValuePutOptions,
} from "../../models/options.js";

export interface UnknownValueOperations {
  get: (options?: UnknownValueGetOptions) => Promise<unknown[]>;
  put: (body: unknown[], options?: UnknownValuePutOptions) => Promise<void>;
}

export function getUnknownValue(context: ArrayContext) {
  return {
    get: (options?: UnknownValueGetOptions) =>
      unknownValueGet(context, options),
    put: (body: unknown[], options?: UnknownValuePutOptions) =>
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
