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
} from "../../models/options.js";

export interface StringLiteralOperations {
  get: (
    options?: StringLiteralGetOptionalParams,
  ) => Promise<StringLiteralProperty>;
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
