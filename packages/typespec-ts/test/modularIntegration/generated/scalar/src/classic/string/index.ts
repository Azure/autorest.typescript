// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/scalarContext.js";
import { stringGet, stringPut } from "../../api/string/index.js";
import {
  StringGetOptionalParams,
  StringPutOptionalParams,
} from "../../models/options.js";

export interface StringOperations {
  get: (options?: StringGetOptionalParams) => Promise<string>;
  put: (body: string, options?: StringPutOptionalParams) => Promise<void>;
}

export function getString(context: ScalarContext) {
  return {
    get: (options?: StringGetOptionalParams) => stringGet(context, options),
    put: (body: string, options?: StringPutOptionalParams) =>
      stringPut(context, body, options),
  };
}

export function getStringOperations(context: ScalarContext): StringOperations {
  return {
    ...getString(context),
  };
}
