// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionFloatLiteralProperty } from "../../models/models.js";
import {
  unionFloatLiteralGet,
  unionFloatLiteralPut,
} from "../../api/unionFloatLiteral/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnionFloatLiteralOperations {
  get: (options?: GetOptions) => Promise<UnionFloatLiteralProperty>;
  put: (body: UnionFloatLiteralProperty, options?: PutOptions) => Promise<void>;
}

export function getUnionFloatLiteral(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unionFloatLiteralGet(context, options),
    put: (body: UnionFloatLiteralProperty, options?: PutOptions) =>
      unionFloatLiteralPut(context, body, options),
  };
}

export function getUnionFloatLiteralOperations(
  context: ValueTypesContext,
): UnionFloatLiteralOperations {
  return {
    ...getUnionFloatLiteral(context),
  };
}
