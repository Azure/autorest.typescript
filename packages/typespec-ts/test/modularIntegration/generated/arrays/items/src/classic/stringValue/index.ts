// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import { stringValueGet, stringValuePut } from "../../api/stringValue/index.js";
import {
  StringValueGetOptions,
  StringValuePutOptions,
} from "../../models/options.js";

export interface StringValueOperations {
  get: (options?: StringValueGetOptions) => Promise<string[]>;
  put: (body: string[], options?: StringValuePutOptions) => Promise<void>;
}

export function getStringValue(context: ArrayContext) {
  return {
    get: (options?: StringValueGetOptions) => stringValueGet(context, options),
    put: (body: string[], options?: StringValuePutOptions) =>
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
