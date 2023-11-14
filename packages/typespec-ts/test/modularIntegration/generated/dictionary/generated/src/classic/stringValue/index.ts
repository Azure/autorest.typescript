// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import { stringValueGet, stringValuePut } from "../../api/stringValue/index.js";
import {
  StringValueGetOptions,
  StringValuePutOptions,
} from "../../models/options.js";

export interface StringValueOperations {
  get: (options?: StringValueGetOptions) => Promise<Record<string, string>>;
  put: (
    body: Record<string, string>,
    options?: StringValuePutOptions
  ) => Promise<void>;
}

export function getStringValue(context: DictionaryContext) {
  return {
    get: (options?: StringValueGetOptions) => stringValueGet(context, options),
    put: (body: Record<string, string>, options?: StringValuePutOptions) =>
      stringValuePut(context, body, options),
  };
}

export function getStringValueOperations(
  context: DictionaryContext
): StringValueOperations {
  return {
    ...getStringValue(context),
  };
}
