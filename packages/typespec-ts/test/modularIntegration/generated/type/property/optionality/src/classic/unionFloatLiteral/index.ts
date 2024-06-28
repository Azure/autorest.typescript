// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { UnionFloatLiteralProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/unionFloatLiteral/index.js";
import {
  UnionFloatLiteralGetAllOptionalParams,
  UnionFloatLiteralGetDefaultOptionalParams,
  UnionFloatLiteralPutAllOptionalParams,
  UnionFloatLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export interface UnionFloatLiteralOperations {
  getAll: (
    options?: UnionFloatLiteralGetAllOptionalParams,
  ) => Promise<UnionFloatLiteralProperty>;
  getDefault: (
    options?: UnionFloatLiteralGetDefaultOptionalParams,
  ) => Promise<UnionFloatLiteralProperty>;
  putAll: (
    body: UnionFloatLiteralProperty,
    options?: UnionFloatLiteralPutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: UnionFloatLiteralProperty,
    options?: UnionFloatLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getUnionFloatLiteral(context: OptionalContext) {
  return {
    getAll: (options?: UnionFloatLiteralGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: UnionFloatLiteralGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: UnionFloatLiteralProperty,
      options?: UnionFloatLiteralPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: UnionFloatLiteralProperty,
      options?: UnionFloatLiteralPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getUnionFloatLiteralOperations(
  context: OptionalContext,
): UnionFloatLiteralOperations {
  return {
    ...getUnionFloatLiteral(context),
  };
}
