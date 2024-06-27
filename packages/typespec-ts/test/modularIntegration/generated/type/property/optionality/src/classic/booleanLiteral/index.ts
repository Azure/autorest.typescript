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
} from "../../models/options.js";

export interface BooleanLiteralOperations {
  getAll: (
    options?: BooleanLiteralGetAllOptionalParams,
  ) => Promise<BooleanLiteralProperty>;
  getDefault: (
    options?: BooleanLiteralGetDefaultOptionalParams,
  ) => Promise<BooleanLiteralProperty>;
  putAll: (
    body: BooleanLiteralProperty,
    options?: BooleanLiteralPutAllOptionalParams,
  ) => Promise<void>;
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
