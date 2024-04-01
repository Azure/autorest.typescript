// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  unionIntLiteralGet,
  unionIntLiteralPut,
} from "../../api/unionIntLiteral/index.js";
import {
  UnionIntLiteralGetOptions,
  UnionIntLiteralPutOptions,
} from "../../models/options.js";

export interface UnionIntLiteralOperations {
  get: (
    options?: UnionIntLiteralGetOptions,
  ) => Promise<UnionIntLiteralProperty>;
  put: (
    body: UnionIntLiteralProperty,
    options?: UnionIntLiteralPutOptions,
  ) => Promise<void>;
}

export function getUnionIntLiteral(context: ValueTypesContext) {
  return {
    get: (options?: UnionIntLiteralGetOptions) =>
      unionIntLiteralGet(context, options),
    put: (body: UnionIntLiteralProperty, options?: UnionIntLiteralPutOptions) =>
      unionIntLiteralPut(context, body, options),
  };
}

export function getUnionIntLiteralOperations(
  context: ValueTypesContext,
): UnionIntLiteralOperations {
  return {
    ...getUnionIntLiteral(context),
  };
}
