// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { UnionStringLiteralProperty } from "../../models/models.js";
import {
  unionStringLiteralGetAll,
  unionStringLiteralGetDefault,
  unionStringLiteralPutAll,
  unionStringLiteralPutDefault,
} from "../../api/unionStringLiteral/index.js";
import {
  UnionStringLiteralGetAllOptions,
  UnionStringLiteralGetDefaultOptions,
  UnionStringLiteralPutAllOptions,
  UnionStringLiteralPutDefaultOptions,
} from "../../models/options.js";

export interface UnionStringLiteralOperations {
  getAll: (
    options?: UnionStringLiteralGetAllOptions,
  ) => Promise<UnionStringLiteralProperty>;
  getDefault: (
    options?: UnionStringLiteralGetDefaultOptions,
  ) => Promise<UnionStringLiteralProperty>;
  putAll: (
    body: UnionStringLiteralProperty,
    options?: UnionStringLiteralPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: UnionStringLiteralProperty,
    options?: UnionStringLiteralPutDefaultOptions,
  ) => Promise<void>;
}

export function getUnionStringLiteral(context: OptionalContext) {
  return {
    getAll: (options?: UnionStringLiteralGetAllOptions) =>
      unionStringLiteralGetAll(context, options),
    getDefault: (options?: UnionStringLiteralGetDefaultOptions) =>
      unionStringLiteralGetDefault(context, options),
    putAll: (
      body: UnionStringLiteralProperty,
      options?: UnionStringLiteralPutAllOptions,
    ) => unionStringLiteralPutAll(context, body, options),
    putDefault: (
      body: UnionStringLiteralProperty,
      options?: UnionStringLiteralPutDefaultOptions,
    ) => unionStringLiteralPutDefault(context, body, options),
  };
}

export function getUnionStringLiteralOperations(
  context: OptionalContext,
): UnionStringLiteralOperations {
  return {
    ...getUnionStringLiteral(context),
  };
}
