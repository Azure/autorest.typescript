// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BooleanLiteralProperty } from "../../models/models.js";
import {
  booleanLiteralGet,
  booleanLiteralPut,
} from "../../api/booleanLiteral/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface BooleanLiteralOperations {
  get: (options?: GetOptions) => Promise<BooleanLiteralProperty>;
  put: (body: BooleanLiteralProperty, options?: PutOptions) => Promise<void>;
}

export function getBooleanLiteral(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => booleanLiteralGet(context, options),
    put: (body: BooleanLiteralProperty, options?: PutOptions) =>
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
