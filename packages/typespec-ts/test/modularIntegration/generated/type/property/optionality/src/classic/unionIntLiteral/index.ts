// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/unionIntLiteral/index.js";
import {
  UnionIntLiteralGetAllOptionalParams,
  UnionIntLiteralGetDefaultOptionalParams,
  UnionIntLiteralPutAllOptionalParams,
  UnionIntLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export interface UnionIntLiteralOperations {
  getAll: (
    options?: UnionIntLiteralGetAllOptionalParams,
  ) => Promise<UnionIntLiteralProperty>;
  getDefault: (
    options?: UnionIntLiteralGetDefaultOptionalParams,
  ) => Promise<UnionIntLiteralProperty>;
  putAll: (
    body: UnionIntLiteralProperty,
    options?: UnionIntLiteralPutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: UnionIntLiteralProperty,
    options?: UnionIntLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getUnionIntLiteral(context: OptionalContext) {
  return {
    getAll: (options?: UnionIntLiteralGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: UnionIntLiteralGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: UnionIntLiteralProperty,
      options?: UnionIntLiteralPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: UnionIntLiteralProperty,
      options?: UnionIntLiteralPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getUnionIntLiteralOperations(
  context: OptionalContext,
): UnionIntLiteralOperations {
  return {
    ...getUnionIntLiteral(context),
  };
}
