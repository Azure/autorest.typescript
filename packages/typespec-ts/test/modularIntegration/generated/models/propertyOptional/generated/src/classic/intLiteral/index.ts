// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { IntLiteralProperty } from "../../models/models.js";
import {
  intLiteralGetAll,
  intLiteralGetDefault,
  intLiteralPutAll,
  intLiteralPutDefault,
} from "../../api/intLiteral/index.js";
import {
  IntLiteralGetAllOptions,
  IntLiteralGetDefaultOptions,
  IntLiteralPutAllOptions,
  IntLiteralPutDefaultOptions,
} from "../../models/options.js";

export interface IntLiteralOperations {
  getAll: (options?: IntLiteralGetAllOptions) => Promise<IntLiteralProperty>;
  getDefault: (
    options?: IntLiteralGetDefaultOptions,
  ) => Promise<IntLiteralProperty>;
  putAll: (
    body: IntLiteralProperty,
    options?: IntLiteralPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: IntLiteralProperty,
    options?: IntLiteralPutDefaultOptions,
  ) => Promise<void>;
}

export function getIntLiteral(context: OptionalContext) {
  return {
    getAll: (options?: IntLiteralGetAllOptions) =>
      intLiteralGetAll(context, options),
    getDefault: (options?: IntLiteralGetDefaultOptions) =>
      intLiteralGetDefault(context, options),
    putAll: (body: IntLiteralProperty, options?: IntLiteralPutAllOptions) =>
      intLiteralPutAll(context, body, options),
    putDefault: (
      body: IntLiteralProperty,
      options?: IntLiteralPutDefaultOptions,
    ) => intLiteralPutDefault(context, body, options),
  };
}

export function getIntLiteralOperations(
  context: OptionalContext,
): IntLiteralOperations {
  return {
    ...getIntLiteral(context),
  };
}
