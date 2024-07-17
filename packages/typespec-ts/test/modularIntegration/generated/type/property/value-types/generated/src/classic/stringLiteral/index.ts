// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { StringLiteralProperty } from "../../models/models.js";
import {
  stringLiteralGet,
  stringLiteralPut,
} from "../../api/stringLiteral/index.js";
import {
  StringLiteralGetOptionalParams,
  StringLiteralPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a StringLiteral operations. */
export interface StringLiteralOperations {
  /** Get call */
  get: (
    options?: StringLiteralGetOptionalParams,
  ) => Promise<StringLiteralProperty>;
  /** Put operation */
  put: (
    body: StringLiteralProperty,
    options?: StringLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getStringLiteral(context: ValueTypesContext) {
  return {
    get: (options?: StringLiteralGetOptionalParams) =>
      stringLiteralGet(context, options),
    put: (
      body: StringLiteralProperty,
      options?: StringLiteralPutOptionalParams,
    ) => stringLiteralPut(context, body, options),
  };
}

export function getStringLiteralOperations(
  context: ValueTypesContext,
): StringLiteralOperations {
  return {
    ...getStringLiteral(context),
  };
}
