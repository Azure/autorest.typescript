// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { UnionFloatLiteralProperty } from "../../models/models.js";
import {
  unionFloatLiteralGetAll,
  unionFloatLiteralGetDefault,
  unionFloatLiteralPutAll,
  unionFloatLiteralPutDefault,
} from "../../api/unionFloatLiteral/index.js";
import {
  UnionFloatLiteralGetAllOptions,
  UnionFloatLiteralGetDefaultOptions,
  UnionFloatLiteralPutAllOptions,
  UnionFloatLiteralPutDefaultOptions,
} from "../../models/options.js";

export interface UnionFloatLiteralOperations {
  getAll: (
    options?: UnionFloatLiteralGetAllOptions,
  ) => Promise<UnionFloatLiteralProperty>;
  getDefault: (
    options?: UnionFloatLiteralGetDefaultOptions,
  ) => Promise<UnionFloatLiteralProperty>;
  putAll: (
    body: UnionFloatLiteralProperty,
    options?: UnionFloatLiteralPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: UnionFloatLiteralProperty,
    options?: UnionFloatLiteralPutDefaultOptions,
  ) => Promise<void>;
}

export function getUnionFloatLiteral(context: OptionalContext) {
  return {
    getAll: (options?: UnionFloatLiteralGetAllOptions) =>
      unionFloatLiteralGetAll(context, options),
    getDefault: (options?: UnionFloatLiteralGetDefaultOptions) =>
      unionFloatLiteralGetDefault(context, options),
    putAll: (
      body: UnionFloatLiteralProperty,
      options?: UnionFloatLiteralPutAllOptions,
    ) => unionFloatLiteralPutAll(context, body, options),
    putDefault: (
      body: UnionFloatLiteralProperty,
      options?: UnionFloatLiteralPutDefaultOptions,
    ) => unionFloatLiteralPutDefault(context, body, options),
  };
}

export function getUnionFloatLiteralOperations(
  context: OptionalContext,
): UnionFloatLiteralOperations {
  return {
    ...getUnionFloatLiteral(context),
  };
}
