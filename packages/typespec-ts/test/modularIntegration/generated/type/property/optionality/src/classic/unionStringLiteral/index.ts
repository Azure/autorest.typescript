// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { UnionStringLiteralProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/unionStringLiteral/index.js";
import {
  UnionStringLiteralGetAllOptionalParams,
  UnionStringLiteralGetDefaultOptionalParams,
  UnionStringLiteralPutAllOptionalParams,
  UnionStringLiteralPutDefaultOptionalParams,
} from "../../models/options.js";

export interface UnionStringLiteralOperations {
  getAll: (
    options?: UnionStringLiteralGetAllOptionalParams,
  ) => Promise<UnionStringLiteralProperty>;
  getDefault: (
    options?: UnionStringLiteralGetDefaultOptionalParams,
  ) => Promise<UnionStringLiteralProperty>;
  putAll: (
    body: UnionStringLiteralProperty,
    options?: UnionStringLiteralPutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: UnionStringLiteralProperty,
    options?: UnionStringLiteralPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getUnionStringLiteral(context: OptionalContext) {
  return {
    getAll: (options?: UnionStringLiteralGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: UnionStringLiteralGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: UnionStringLiteralProperty,
      options?: UnionStringLiteralPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: UnionStringLiteralProperty,
      options?: UnionStringLiteralPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getUnionStringLiteralOperations(
  context: OptionalContext,
): UnionStringLiteralOperations {
  return {
    ...getUnionStringLiteral(context),
  };
}
