// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { IntLiteralProperty } from "../../models/models.js";
import { intLiteralGet, intLiteralPut } from "../../api/intLiteral/index.js";
import {
  IntLiteralGetOptions,
  IntLiteralPutOptions,
} from "../../models/options.js";

export interface IntLiteralOperations {
  get: (options?: IntLiteralGetOptions) => Promise<IntLiteralProperty>;
  put: (
    body: IntLiteralProperty,
    options?: IntLiteralPutOptions,
  ) => Promise<void>;
}

export function getIntLiteral(context: ValueTypesContext) {
  return {
    get: (options?: IntLiteralGetOptions) => intLiteralGet(context, options),
    put: (body: IntLiteralProperty, options?: IntLiteralPutOptions) =>
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
