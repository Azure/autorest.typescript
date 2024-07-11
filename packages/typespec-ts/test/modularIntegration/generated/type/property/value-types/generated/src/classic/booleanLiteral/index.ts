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
} from "../../api/options.js";

/** Interface representing a BooleanLiteral operations. */
export interface BooleanLiteralOperations {
  /** Get call */
  get: (
    options?: BooleanLiteralGetOptionalParams,
  ) => Promise<BooleanLiteralProperty>;
  /** Put operation */
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
