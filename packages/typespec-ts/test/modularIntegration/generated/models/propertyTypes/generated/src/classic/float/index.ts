// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { FloatProperty } from "../../models/models.js";
import { floatGet, floatPut } from "../../api/float/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface FloatOperations {
  get: (options?: GetOptions) => Promise<FloatProperty>;
  put: (body: FloatProperty, options?: PutOptions) => Promise<void>;
}

export function getFloat(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => floatGet(context, options),
    put: (body: FloatProperty, options?: PutOptions) =>
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
