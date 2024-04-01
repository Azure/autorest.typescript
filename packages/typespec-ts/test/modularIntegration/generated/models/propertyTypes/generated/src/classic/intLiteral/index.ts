// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { IntLiteralProperty } from "../../models/models.js";
import { intLiteralGet, intLiteralPut } from "../../api/intLiteral/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface IntLiteralOperations {
  get: (options?: GetOptions) => Promise<IntLiteralProperty>;
  put: (body: IntLiteralProperty, options?: PutOptions) => Promise<void>;
}

export function getIntLiteral(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => intLiteralGet(context, options),
    put: (body: IntLiteralProperty, options?: PutOptions) =>
      intLiteralPut(context, body, options),
  };
}

export function getIntLiteralOperations(
  context: ValueTypesContext,
): IntLiteralOperations {
  return {
    ...getIntLiteral(context),
  };
}
