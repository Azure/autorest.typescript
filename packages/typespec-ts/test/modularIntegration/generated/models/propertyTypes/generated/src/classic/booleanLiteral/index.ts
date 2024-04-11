// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { BooleanLiteralProperty } from "../../models/models.js";
import {
  booleanLiteralGet,
  booleanLiteralPut,
} from "../../api/booleanLiteral/index.js";
import {
  BooleanLiteralGetOptionalParams,
  BooleanLiteralPutOptionalParams,
} from "../../models/options.js";

export interface BooleanLiteralOperations {
  get: (
    options?: BooleanLiteralGetOptionalParams,
  ) => Promise<BooleanLiteralProperty>;
  put: (
    body: BooleanLiteralProperty,
    options?: BooleanLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getBooleanLiteral(context: ValueTypesContext) {
  return {
    get: (options?: BooleanLiteralGetOptionalParams) =>
      booleanLiteralGet(context, options),
    put: (
      body: BooleanLiteralProperty,
      options?: BooleanLiteralPutOptionalParams,
    ) => booleanLiteralPut(context, body, options),
  };
}

export function getBooleanLiteralOperations(
  context: ValueTypesContext,
): BooleanLiteralOperations {
  return {
    ...getBooleanLiteral(context),
  };
}
