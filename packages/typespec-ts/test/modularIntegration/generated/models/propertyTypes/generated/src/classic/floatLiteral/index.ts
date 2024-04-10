// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { FloatLiteralProperty } from "../../models/models.js";
import {
  floatLiteralGet,
  floatLiteralPut,
} from "../../api/floatLiteral/index.js";
import {
  FloatLiteralGetOptionalParams,
  FloatLiteralPutOptionalParams,
} from "../../models/options.js";

export interface FloatLiteralOperations {
  get: (
    options?: FloatLiteralGetOptionalParams,
  ) => Promise<FloatLiteralProperty>;
  put: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutOptionalParams,
  ) => Promise<void>;
}

export function getFloatLiteral(context: ValueTypesContext) {
  return {
    get: (options?: FloatLiteralGetOptionalParams) =>
      floatLiteralGet(context, options),
    put: (
      body: FloatLiteralProperty,
      options?: FloatLiteralPutOptionalParams,
    ) => floatLiteralPut(context, body, options),
  };
}

export function getFloatLiteralOperations(
  context: ValueTypesContext,
): FloatLiteralOperations {
  return {
    ...getFloatLiteral(context),
  };
}
