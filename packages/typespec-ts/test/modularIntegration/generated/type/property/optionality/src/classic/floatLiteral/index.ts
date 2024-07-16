// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { FloatLiteralProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/floatLiteral/index.js";
import {
  FloatLiteralGetAllOptionalParams,
  FloatLiteralGetDefaultOptionalParams,
  FloatLiteralPutAllOptionalParams,
  FloatLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

/** Interface representing a FloatLiteral operations. */
export interface FloatLiteralOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: FloatLiteralGetAllOptionalParams,
  ) => Promise<FloatLiteralProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: FloatLiteralGetDefaultOptionalParams,
  ) => Promise<FloatLiteralProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getFloatLiteral(context: OptionalContext) {
  return {
    getAll: (options?: FloatLiteralGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: FloatLiteralGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: FloatLiteralProperty,
      options?: FloatLiteralPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: FloatLiteralProperty,
      options?: FloatLiteralPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getFloatLiteralOperations(
  context: OptionalContext,
): FloatLiteralOperations {
  return {
    ...getFloatLiteral(context),
  };
}
