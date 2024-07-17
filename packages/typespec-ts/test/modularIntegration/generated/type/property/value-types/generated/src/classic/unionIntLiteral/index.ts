// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  unionIntLiteralGet,
  unionIntLiteralPut,
} from "../../api/unionIntLiteral/index.js";
import {
  UnionIntLiteralGetOptionalParams,
  UnionIntLiteralPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a UnionIntLiteral operations. */
export interface UnionIntLiteralOperations {
  /** Get call */
  get: (
    options?: UnionIntLiteralGetOptionalParams,
  ) => Promise<UnionIntLiteralProperty>;
  /** Put operation */
  put: (
    body: UnionIntLiteralProperty,
    options?: UnionIntLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getUnionIntLiteral(context: ValueTypesContext) {
  return {
    get: (options?: UnionIntLiteralGetOptionalParams) =>
      unionIntLiteralGet(context, options),
    put: (
      body: UnionIntLiteralProperty,
      options?: UnionIntLiteralPutOptionalParams,
    ) => unionIntLiteralPut(context, body, options),
  };
}

export function getUnionIntLiteralOperations(
  context: ValueTypesContext,
): UnionIntLiteralOperations {
  return {
    ...getUnionIntLiteral(context),
  };
}
