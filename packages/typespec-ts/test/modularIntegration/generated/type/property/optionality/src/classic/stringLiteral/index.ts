// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { StringLiteralProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
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
      getAll(context, options),
    getDefault: (options?: StringLiteralGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: StringLiteralProperty,
      options?: StringLiteralPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: StringLiteralProperty,
      options?: StringLiteralPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getStringLiteralOperations(
  context: OptionalContext,
): StringLiteralOperations {
  return {
    ...getStringLiteral(context),
  };
}
