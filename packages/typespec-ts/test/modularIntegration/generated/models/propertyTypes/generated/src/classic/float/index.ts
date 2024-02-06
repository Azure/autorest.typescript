// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { FloatProperty } from "../../models/models.js";
import { floatGet, floatPut } from "../../api/float/index.js";
import { FloatGetOptions, FloatPutOptions } from "../../models/options.js";

export interface FloatOperations {
  get: (options?: FloatGetOptions) => Promise<FloatProperty>;
  put: (body: FloatProperty, options?: FloatPutOptions) => Promise<void>;
}

export function getFloat(context: ValueTypesContext) {
  return {
    get: (options?: FloatGetOptions) => floatGet(context, options),
    put: (body: FloatProperty, options?: FloatPutOptions) =>
      floatPut(context, body, options),
  };
}

export function getFloatOperations(
  context: ValueTypesContext,
): FloatOperations {
  return {
    ...getFloat(context),
  };
}
