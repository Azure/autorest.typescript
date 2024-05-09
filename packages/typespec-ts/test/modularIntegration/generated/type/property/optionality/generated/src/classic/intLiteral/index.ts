// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { IntLiteralProperty } from "../../models/models.js";
import {
  intLiteralGetAll,
  intLiteralGetDefault,
  intLiteralPutAll,
  intLiteralPutDefault,
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
      intLiteralGetAll(context, options),
    getDefault: (options?: IntLiteralGetDefaultOptionalParams) =>
      intLiteralGetDefault(context, options),
    putAll: (
      body: IntLiteralProperty,
      options?: IntLiteralPutAllOptionalParams,
    ) => intLiteralPutAll(context, body, options),
    putDefault: (
      body: IntLiteralProperty,
      options?: IntLiteralPutDefaultOptionalParams,
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
