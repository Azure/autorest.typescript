// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { StringProperty } from "../../models/models.js";
import { stringGet, stringPut } from "../../api/string/index.js";
import {
  StringGetOptionalParams,
  StringPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a String operations. */
export interface StringOperations {
  /** Get call */
  get: (options?: StringGetOptionalParams) => Promise<StringProperty>;
  /** Put operation */
  put: (
    body: StringProperty,
    options?: StringPutOptionalParams,
  ) => Promise<void>;
}

export function getString(context: ValueTypesContext) {
  return {
    get: (options?: StringGetOptionalParams) => stringGet(context, options),
    put: (body: StringProperty, options?: StringPutOptionalParams) =>
      stringPut(context, body, options),
  };
}

export function getStringOperations(
  context: ValueTypesContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
