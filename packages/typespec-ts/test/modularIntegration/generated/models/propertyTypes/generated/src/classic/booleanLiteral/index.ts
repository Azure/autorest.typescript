// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BooleanLiteralProperty } from "../../models/models.js";
import {
  booleanLiteralGet,
  booleanLiteralPut,
} from "../../api/booleanLiteral/index.js";
import {
  BooleanLiteralGetOptions,
  BooleanLiteralPutOptions,
} from "../../models/options.js";

export interface BooleanLiteralOperations {
  get: (options?: BooleanLiteralGetOptions) => Promise<BooleanLiteralProperty>;
  put: (
    body: BooleanLiteralProperty,
    options?: BooleanLiteralPutOptions,
  ) => Promise<void>;
}

export function getBooleanLiteral(context: ValueTypesContext) {
  return {
    get: (options?: BooleanLiteralGetOptions) =>
      booleanLiteralGet(context, options),
    put: (body: BooleanLiteralProperty, options?: BooleanLiteralPutOptions) =>
      booleanLiteralPut(context, body, options),
  };
}

export function getBooleanLiteralOperations(
  context: ValueTypesContext,
): BooleanLiteralOperations {
  return {
    ...getBooleanLiteral(context),
  };
}
