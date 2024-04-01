// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionIntLiteralProperty } from "../../models/models.js";
import {
  unionIntLiteralGet,
  unionIntLiteralPut,
} from "../../api/unionIntLiteral/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnionIntLiteralOperations {
  get: (options?: GetOptions) => Promise<UnionIntLiteralProperty>;
  put: (body: UnionIntLiteralProperty, options?: PutOptions) => Promise<void>;
}

export function getUnionIntLiteral(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unionIntLiteralGet(context, options),
    put: (body: UnionIntLiteralProperty, options?: PutOptions) =>
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
