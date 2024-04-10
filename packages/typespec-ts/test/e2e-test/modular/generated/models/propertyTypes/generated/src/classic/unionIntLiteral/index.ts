// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  unionIntLiteralGet,
  unionIntLiteralPut,
} from "../../api/unionIntLiteral/index.js";
import {
  UnionIntLiteralGetOptionalParams,
  UnionIntLiteralPutOptionalParams,
} from "../../models/options.js";

export interface UnionIntLiteralOperations {
  get: (
    options?: UnionIntLiteralGetOptionalParams,
  ) => Promise<UnionIntLiteralProperty>;
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
