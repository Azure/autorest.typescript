// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import { stringValueGet, stringValuePut } from "../../api/stringValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface StringValueOperations {
  get: (options?: GetOptions) => Promise<string[]>;
  put: (body: string[], options?: PutOptions) => Promise<void>;
}

export function getStringValue(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => stringValueGet(context, options),
    put: (body: string[], options?: PutOptions) =>
      stringValuePut(context, body, options),
  };
}

export function getStringValueOperations(
  context: ArrayContext,
): StringValueOperations {
  return {
    ...getStringValue(context),
  };
}
