// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import { stringGet, stringPut } from "../../api/string/index.js";
import { StringGetOptions, StringPutOptions } from "../../models/options.js";

export interface StringOperations {
  get: (options?: StringGetOptions) => Promise<string>;
  put: (body: string, options?: StringPutOptions) => Promise<void>;
}

export function getString(context: ScalarContext) {
  return {
    get: (options?: StringGetOptions) => stringGet(context, options),
    put: (body: string, options?: StringPutOptions) =>
      stringPut(context, body, options),
  };
}

export function getStringOperations(context: ScalarContext): StringOperations {
  return {
    ...getString(context),
  };
}
