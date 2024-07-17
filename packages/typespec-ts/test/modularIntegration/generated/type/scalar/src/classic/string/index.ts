// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/scalarContext.js";
import { stringGet, stringPut } from "../../api/string/index.js";
import {
  StringGetOptionalParams,
  StringPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a String operations. */
export interface StringOperations {
  /** get string value */
  get: (options?: StringGetOptionalParams) => Promise<string>;
  /** put string value */
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
