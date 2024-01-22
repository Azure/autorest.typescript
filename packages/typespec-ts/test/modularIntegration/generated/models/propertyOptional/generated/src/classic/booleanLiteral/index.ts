// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { BooleanLiteralProperty } from "../../models/models.js";
import {
  booleanLiteralGetAll,
  booleanLiteralGetDefault,
  booleanLiteralPutAll,
  booleanLiteralPutDefault,
} from "../../api/booleanLiteral/index.js";
import {
  BooleanLiteralGetAllOptions,
  BooleanLiteralGetDefaultOptions,
  BooleanLiteralPutAllOptions,
  BooleanLiteralPutDefaultOptions,
} from "../../models/options.js";

export interface BooleanLiteralOperations {
  getAll: (
    options?: BooleanLiteralGetAllOptions,
  ) => Promise<BooleanLiteralProperty>;
  getDefault: (
    options?: BooleanLiteralGetDefaultOptions,
  ) => Promise<BooleanLiteralProperty>;
  putAll: (
    body: BooleanLiteralProperty,
    options?: BooleanLiteralPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: BooleanLiteralProperty,
    options?: BooleanLiteralPutDefaultOptions,
  ) => Promise<void>;
}

export function getBooleanLiteral(context: OptionalContext) {
  return {
    getAll: (options?: BooleanLiteralGetAllOptions) =>
      booleanLiteralGetAll(context, options),
    getDefault: (options?: BooleanLiteralGetDefaultOptions) =>
      booleanLiteralGetDefault(context, options),
    putAll: (
      body: BooleanLiteralProperty,
      options?: BooleanLiteralPutAllOptions,
    ) => booleanLiteralPutAll(context, body, options),
    putDefault: (
      body: BooleanLiteralProperty,
      options?: BooleanLiteralPutDefaultOptions,
    ) => booleanLiteralPutDefault(context, body, options),
  };
}

export function getBooleanLiteralOperations(
  context: OptionalContext,
): BooleanLiteralOperations {
  return {
    ...getBooleanLiteral(context),
  };
}
