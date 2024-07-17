// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { IntLiteralProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/intLiteral/index.js";
import {
  IntLiteralGetAllOptionalParams,
  IntLiteralGetDefaultOptionalParams,
  IntLiteralPutAllOptionalParams,
  IntLiteralPutDefaultOptionalParams,
} from "../../api/options.js";

/** Interface representing a IntLiteral operations. */
export interface IntLiteralOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: IntLiteralGetAllOptionalParams,
  ) => Promise<IntLiteralProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: IntLiteralGetDefaultOptionalParams,
  ) => Promise<IntLiteralProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: IntLiteralProperty,
    options?: IntLiteralPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: IntLiteralProperty,
    options?: IntLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getIntLiteral(context: OptionalContext) {
  return {
    getAll: (options?: IntLiteralGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: IntLiteralGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: IntLiteralProperty,
      options?: IntLiteralPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: IntLiteralProperty,
      options?: IntLiteralPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getIntLiteralOperations(
  context: OptionalContext,
): IntLiteralOperations {
  return {
    ...getIntLiteral(context),
  };
}
