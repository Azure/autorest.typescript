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

/** Interface representing a UnionIntLiteral operations. */
export interface UnionIntLiteralOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: UnionIntLiteralGetAllOptionalParams,
  ) => Promise<UnionIntLiteralProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: UnionIntLiteralGetDefaultOptionalParams,
  ) => Promise<UnionIntLiteralProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: UnionIntLiteralProperty,
    options?: UnionIntLiteralPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
