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
} from "../../api/options.js";

/** Interface representing a UnionStringLiteral operations. */
export interface UnionStringLiteralOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: UnionStringLiteralGetAllOptionalParams,
  ) => Promise<UnionStringLiteralProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: UnionStringLiteralGetDefaultOptionalParams,
  ) => Promise<UnionStringLiteralProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: UnionStringLiteralProperty,
    options?: UnionStringLiteralPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
