// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { UnionFloatLiteralProperty } from "../../models/models.js";
import {
  unionFloatLiteralGet,
  unionFloatLiteralPut,
} from "../../api/unionFloatLiteral/index.js";
import {
  UnionFloatLiteralGetOptionalParams,
  UnionFloatLiteralPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a UnionFloatLiteral operations. */
export interface UnionFloatLiteralOperations {
  /** Get call */
  get: (
    options?: UnionFloatLiteralGetOptionalParams,
  ) => Promise<UnionFloatLiteralProperty>;
  /** Put operation */
  put: (
    body: UnionFloatLiteralProperty,
    options?: UnionFloatLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getUnionFloatLiteral(context: ValueTypesContext) {
  return {
    get: (options?: UnionFloatLiteralGetOptionalParams) =>
      unionFloatLiteralGet(context, options),
    put: (
      body: UnionFloatLiteralProperty,
      options?: UnionFloatLiteralPutOptionalParams,
    ) => unionFloatLiteralPut(context, body, options),
  };
}

export function getUnionFloatLiteralOperations(
  context: ValueTypesContext,
): UnionFloatLiteralOperations {
  return {
    ...getUnionFloatLiteral(context),
  };
}
