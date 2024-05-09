// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { FloatLiteralProperty } from "../../models/models.js";
import {
  floatLiteralGetAll,
  floatLiteralGetDefault,
  floatLiteralPutAll,
  floatLiteralPutDefault,
} from "../../api/floatLiteral/index.js";
import {
  FloatLiteralGetAllOptionalParams,
  FloatLiteralGetDefaultOptionalParams,
  FloatLiteralPutAllOptionalParams,
  FloatLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export interface FloatLiteralOperations {
  getAll: (
    options?: FloatLiteralGetAllOptionalParams,
  ) => Promise<FloatLiteralProperty>;
  getDefault: (
    options?: FloatLiteralGetDefaultOptionalParams,
  ) => Promise<FloatLiteralProperty>;
  putAll: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getFloatLiteral(context: OptionalContext) {
  return {
    getAll: (options?: FloatLiteralGetAllOptionalParams) =>
      floatLiteralGetAll(context, options),
    getDefault: (options?: FloatLiteralGetDefaultOptionalParams) =>
      floatLiteralGetDefault(context, options),
    putAll: (
      body: FloatLiteralProperty,
      options?: FloatLiteralPutAllOptionalParams,
    ) => floatLiteralPutAll(context, body, options),
    putDefault: (
      body: FloatLiteralProperty,
      options?: FloatLiteralPutDefaultOptionalParams,
    ) => floatLiteralPutDefault(context, body, options),
  };
}

export function getFloatLiteralOperations(
  context: OptionalContext,
): FloatLiteralOperations {
  return {
    ...getFloatLiteral(context),
  };
}
