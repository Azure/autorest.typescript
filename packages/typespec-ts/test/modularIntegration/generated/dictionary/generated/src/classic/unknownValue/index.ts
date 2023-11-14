// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import {
  unknownValueGet,
  unknownValuePut,
} from "../../api/unknownValue/index.js";
import {
  UnknownValueGetOptions,
  UnknownValuePutOptions,
} from "../../models/options.js";

export interface UnknownValueOperations {
  get: (options?: UnknownValueGetOptions) => Promise<Record<string, unknown>>;
  put: (
    body: Record<string, unknown>,
    options?: UnknownValuePutOptions
  ) => Promise<void>;
}

export function getUnknownValue(context: DictionaryContext) {
  return {
    get: (options?: UnknownValueGetOptions) =>
      unknownValueGet(context, options),
    put: (body: Record<string, unknown>, options?: UnknownValuePutOptions) =>
      unknownValuePut(context, body, options),
  };
}

export function getUnknownValueOperations(
  context: DictionaryContext
): UnknownValueOperations {
  return {
    ...getUnknownValue(context),
  };
}
