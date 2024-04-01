// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { FloatLiteralProperty } from "../../models/models.js";
import {
  floatLiteralGet,
  floatLiteralPut,
} from "../../api/floatLiteral/index.js";
import {
  FloatLiteralGetOptions,
  FloatLiteralPutOptions,
} from "../../models/options.js";

export interface FloatLiteralOperations {
  get: (options?: FloatLiteralGetOptions) => Promise<FloatLiteralProperty>;
  put: (
    body: FloatLiteralProperty,
    options?: FloatLiteralPutOptions,
  ) => Promise<void>;
}

export function getFloatLiteral(context: ValueTypesContext) {
  return {
    get: (options?: FloatLiteralGetOptions) =>
      floatLiteralGet(context, options),
    put: (body: FloatLiteralProperty, options?: FloatLiteralPutOptions) =>
      floatLiteralPut(context, body, options),
  };
}

export function getFloatLiteralOperations(
  context: ValueTypesContext,
): FloatLiteralOperations {
  return {
    ...getFloatLiteral(context),
  };
}
