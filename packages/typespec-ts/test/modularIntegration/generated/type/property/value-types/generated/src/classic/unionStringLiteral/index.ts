// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { UnionStringLiteralProperty } from "../../models/models.js";
import {
  unionStringLiteralGet,
  unionStringLiteralPut,
} from "../../api/unionStringLiteral/index.js";
import {
  UnionStringLiteralGetOptionalParams,
  UnionStringLiteralPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a UnionStringLiteral operations. */
export interface UnionStringLiteralOperations {
  /** Get call */
  get: (
    options?: UnionStringLiteralGetOptionalParams,
  ) => Promise<UnionStringLiteralProperty>;
  /** Put operation */
  put: (
    body: UnionStringLiteralProperty,
    options?: UnionStringLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getUnionStringLiteral(context: ValueTypesContext) {
  return {
    get: (options?: UnionStringLiteralGetOptionalParams) =>
      unionStringLiteralGet(context, options),
    put: (
      body: UnionStringLiteralProperty,
      options?: UnionStringLiteralPutOptionalParams,
    ) => unionStringLiteralPut(context, body, options),
  };
}

export function getUnionStringLiteralOperations(
  context: ValueTypesContext,
): UnionStringLiteralOperations {
  return {
    ...getUnionStringLiteral(context),
  };
}
