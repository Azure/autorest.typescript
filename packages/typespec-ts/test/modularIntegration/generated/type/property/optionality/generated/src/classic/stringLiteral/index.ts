// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { StringLiteralProperty } from "../../models/models.js";
import {
  stringLiteralGetAll,
  stringLiteralGetDefault,
  stringLiteralPutAll,
  stringLiteralPutDefault,
} from "../../api/stringLiteral/index.js";
import {
  StringLiteralGetAllOptionalParams,
  StringLiteralGetDefaultOptionalParams,
  StringLiteralPutAllOptionalParams,
  StringLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export interface StringLiteralOperations {
  getAll: (
    options?: StringLiteralGetAllOptionalParams,
  ) => Promise<StringLiteralProperty>;
  getDefault: (
    options?: StringLiteralGetDefaultOptionalParams,
  ) => Promise<StringLiteralProperty>;
  putAll: (
    body: StringLiteralProperty,
    options?: StringLiteralPutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: StringLiteralProperty,
    options?: StringLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getStringLiteral(context: OptionalContext) {
  return {
    getAll: (options?: StringLiteralGetAllOptionalParams) =>
      stringLiteralGetAll(context, options),
    getDefault: (options?: StringLiteralGetDefaultOptionalParams) =>
      stringLiteralGetDefault(context, options),
    putAll: (
      body: StringLiteralProperty,
      options?: StringLiteralPutAllOptionalParams,
    ) => stringLiteralPutAll(context, body, options),
    putDefault: (
      body: StringLiteralProperty,
      options?: StringLiteralPutDefaultOptionalParams,
    ) => stringLiteralPutDefault(context, body, options),
  };
}

export function getStringLiteralOperations(
  context: OptionalContext,
): StringLiteralOperations {
  return {
    ...getStringLiteral(context),
  };
}
