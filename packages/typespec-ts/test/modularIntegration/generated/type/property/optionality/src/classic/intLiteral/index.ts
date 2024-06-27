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
} from "../../models/options.js";

export interface IntLiteralOperations {
  getAll: (
    options?: IntLiteralGetAllOptionalParams,
  ) => Promise<IntLiteralProperty>;
  getDefault: (
    options?: IntLiteralGetDefaultOptionalParams,
  ) => Promise<IntLiteralProperty>;
  putAll: (
    body: IntLiteralProperty,
    options?: IntLiteralPutAllOptionalParams,
  ) => Promise<void>;
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
