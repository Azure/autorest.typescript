// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { IntLiteralProperty } from "../../models/models.js";
import { intLiteralGet, intLiteralPut } from "../../api/intLiteral/index.js";
import {
  IntLiteralGetOptionalParams,
  IntLiteralPutOptionalParams,
} from "../../models/options.js";

export interface IntLiteralOperations {
  get: (options?: IntLiteralGetOptionalParams) => Promise<IntLiteralProperty>;
  put: (
    body: IntLiteralProperty,
    options?: IntLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getIntLiteral(context: ValueTypesContext) {
  return {
    get: (options?: IntLiteralGetOptionalParams) =>
      intLiteralGet(context, options),
    put: (body: IntLiteralProperty, options?: IntLiteralPutOptionalParams) =>
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
