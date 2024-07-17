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
} from "../../api/options.js";

/** Interface representing a UnionFloatLiteral operations. */
export interface UnionFloatLiteralOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: UnionFloatLiteralGetAllOptionalParams,
  ) => Promise<UnionFloatLiteralProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: UnionFloatLiteralGetDefaultOptionalParams,
  ) => Promise<UnionFloatLiteralProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: UnionFloatLiteralProperty,
    options?: UnionFloatLiteralPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
