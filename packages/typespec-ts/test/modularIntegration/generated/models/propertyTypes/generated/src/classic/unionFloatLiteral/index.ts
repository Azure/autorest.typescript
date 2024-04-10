// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionFloatLiteralProperty } from "../../models/models.js";
import {
  unionFloatLiteralGet,
  unionFloatLiteralPut,
} from "../../api/unionFloatLiteral/index.js";
import {
  UnionFloatLiteralGetOptionalParams,
  UnionFloatLiteralPutOptionalParams,
} from "../../models/options.js";

export interface UnionFloatLiteralOperations {
  get: (
    options?: UnionFloatLiteralGetOptionalParams,
  ) => Promise<UnionFloatLiteralProperty>;
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
