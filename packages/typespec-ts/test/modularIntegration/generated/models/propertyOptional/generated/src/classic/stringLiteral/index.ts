// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { StringLiteralProperty } from "../../models/models.js";
import {
  stringLiteralGetAll,
  stringLiteralGetDefault,
  stringLiteralPutAll,
  stringLiteralPutDefault,
} from "../../api/stringLiteral/index.js";
import {
  StringLiteralGetAllOptions,
  StringLiteralGetDefaultOptions,
  StringLiteralPutAllOptions,
  StringLiteralPutDefaultOptions,
} from "../../models/options.js";

export interface StringLiteralOperations {
  getAll: (
    options?: StringLiteralGetAllOptions,
  ) => Promise<StringLiteralProperty>;
  getDefault: (
    options?: StringLiteralGetDefaultOptions,
  ) => Promise<StringLiteralProperty>;
  putAll: (
    body: StringLiteralProperty,
    options?: StringLiteralPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: StringLiteralProperty,
    options?: StringLiteralPutDefaultOptions,
  ) => Promise<void>;
}

export function getStringLiteral(context: OptionalContext) {
  return {
    getAll: (options?: StringLiteralGetAllOptions) =>
      stringLiteralGetAll(context, options),
    getDefault: (options?: StringLiteralGetDefaultOptions) =>
      stringLiteralGetDefault(context, options),
    putAll: (
      body: StringLiteralProperty,
      options?: StringLiteralPutAllOptions,
    ) => stringLiteralPutAll(context, body, options),
    putDefault: (
      body: StringLiteralProperty,
      options?: StringLiteralPutDefaultOptions,
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
