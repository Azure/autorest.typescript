// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { FloatLiteralProperty } from "../../models/models.js";
import {
  floatLiteralGetAll,
  floatLiteralGetDefault,
  floatLiteralPutAll,
  floatLiteralPutDefault,
} from "../../api/floatLiteral/index.js";
import {
  FloatLiteralGetAllOptions,
  FloatLiteralGetDefaultOptions,
  FloatLiteralPutAllOptions,
  FloatLiteralPutDefaultOptions,
} from "../../models/options.js";

export interface FloatLiteralOperations {
  getAll: (
    options?: FloatLiteralGetAllOptions,
  ) => Promise<FloatLiteralProperty>;
  getDefault: (
    options?: FloatLiteralGetDefaultOptions,
  ) => Promise<FloatLiteralProperty>;
  putAll: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutDefaultOptions,
  ) => Promise<void>;
}

export function getFloatLiteral(context: OptionalContext) {
  return {
    getAll: (options?: FloatLiteralGetAllOptions) =>
      floatLiteralGetAll(context, options),
    getDefault: (options?: FloatLiteralGetDefaultOptions) =>
      floatLiteralGetDefault(context, options),
    putAll: (body: FloatLiteralProperty, options?: FloatLiteralPutAllOptions) =>
      floatLiteralPutAll(context, body, options),
    putDefault: (
      body: FloatLiteralProperty,
      options?: FloatLiteralPutDefaultOptions,
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
