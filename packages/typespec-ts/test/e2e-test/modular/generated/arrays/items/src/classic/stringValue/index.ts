// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import { stringValueGet, stringValuePut } from "../../api/stringValue/index.js";
import {
  StringValueGetOptionalParams,
  StringValuePutOptionalParams,
} from "../../models/options.js";

export interface StringValueOperations {
  get: (options?: StringValueGetOptionalParams) => Promise<string[]>;
  put: (
    body: string[],
    options?: StringValuePutOptionalParams,
  ) => Promise<void>;
}

export function getStringValue(context: ArrayContext) {
  return {
    get: (options?: StringValueGetOptionalParams) =>
      stringValueGet(context, options),
    put: (body: string[], options?: StringValuePutOptionalParams) =>
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
