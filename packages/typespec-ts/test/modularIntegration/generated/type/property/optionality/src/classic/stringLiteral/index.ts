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

/** Interface representing a StringLiteral operations. */
export interface StringLiteralOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: StringLiteralGetAllOptionalParams,
  ) => Promise<StringLiteralProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: StringLiteralGetDefaultOptionalParams,
  ) => Promise<StringLiteralProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: StringLiteralProperty,
    options?: StringLiteralPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
