// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  unionIntLiteralGetAll,
  unionIntLiteralGetDefault,
  unionIntLiteralPutAll,
  unionIntLiteralPutDefault,
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
      unionIntLiteralGetAll(context, options),
    getDefault: (options?: UnionIntLiteralGetDefaultOptionalParams) =>
      unionIntLiteralGetDefault(context, options),
    putAll: (
      body: UnionIntLiteralProperty,
      options?: UnionIntLiteralPutAllOptionalParams,
    ) => unionIntLiteralPutAll(context, body, options),
    putDefault: (
      body: UnionIntLiteralProperty,
      options?: UnionIntLiteralPutDefaultOptionalParams,
    ) => unionIntLiteralPutDefault(context, body, options),
  };
}

export function getUnionIntLiteralOperations(
  context: OptionalContext,
): UnionIntLiteralOperations {
  return {
    ...getUnionIntLiteral(context),
  };
}
