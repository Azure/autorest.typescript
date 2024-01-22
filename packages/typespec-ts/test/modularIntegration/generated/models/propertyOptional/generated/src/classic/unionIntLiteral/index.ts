// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  unionIntLiteralGetAll,
  unionIntLiteralGetDefault,
  unionIntLiteralPutAll,
  unionIntLiteralPutDefault,
} from "../../api/unionIntLiteral/index.js";
import {
  UnionIntLiteralGetAllOptions,
  UnionIntLiteralGetDefaultOptions,
  UnionIntLiteralPutAllOptions,
  UnionIntLiteralPutDefaultOptions,
} from "../../models/options.js";

export interface UnionIntLiteralOperations {
  getAll: (
    options?: UnionIntLiteralGetAllOptions,
  ) => Promise<UnionIntLiteralProperty>;
  getDefault: (
    options?: UnionIntLiteralGetDefaultOptions,
  ) => Promise<UnionIntLiteralProperty>;
  putAll: (
    body: UnionIntLiteralProperty,
    options?: UnionIntLiteralPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: UnionIntLiteralProperty,
    options?: UnionIntLiteralPutDefaultOptions,
  ) => Promise<void>;
}

export function getUnionIntLiteral(context: OptionalContext) {
  return {
    getAll: (options?: UnionIntLiteralGetAllOptions) =>
      unionIntLiteralGetAll(context, options),
    getDefault: (options?: UnionIntLiteralGetDefaultOptions) =>
      unionIntLiteralGetDefault(context, options),
    putAll: (
      body: UnionIntLiteralProperty,
      options?: UnionIntLiteralPutAllOptions,
    ) => unionIntLiteralPutAll(context, body, options),
    putDefault: (
      body: UnionIntLiteralProperty,
      options?: UnionIntLiteralPutDefaultOptions,
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
