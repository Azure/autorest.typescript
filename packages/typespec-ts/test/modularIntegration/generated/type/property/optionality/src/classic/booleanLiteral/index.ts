// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { BooleanLiteralProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/booleanLiteral/index.js";
import {
  BooleanLiteralGetAllOptionalParams,
  BooleanLiteralGetDefaultOptionalParams,
  BooleanLiteralPutAllOptionalParams,
  BooleanLiteralPutDefaultOptionalParams,
} from "../../api/options.js";

/** Interface representing a BooleanLiteral operations. */
export interface BooleanLiteralOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: BooleanLiteralGetAllOptionalParams,
  ) => Promise<BooleanLiteralProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: BooleanLiteralGetDefaultOptionalParams,
  ) => Promise<BooleanLiteralProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: BooleanLiteralProperty,
    options?: BooleanLiteralPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: BooleanLiteralProperty,
    options?: BooleanLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getBooleanLiteral(context: OptionalContext) {
  return {
    getAll: (options?: BooleanLiteralGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: BooleanLiteralGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: BooleanLiteralProperty,
      options?: BooleanLiteralPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: BooleanLiteralProperty,
      options?: BooleanLiteralPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getBooleanLiteralOperations(
  context: OptionalContext,
): BooleanLiteralOperations {
  return {
    ...getBooleanLiteral(context),
  };
}
