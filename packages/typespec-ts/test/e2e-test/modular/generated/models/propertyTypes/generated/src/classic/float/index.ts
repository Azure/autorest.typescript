// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { FloatProperty } from "../../models/models.js";
import { floatGet, floatPut } from "../../api/float/index.js";
import {
  FloatGetOptionalParams,
  FloatPutOptionalParams,
} from "../../models/options.js";

export interface FloatOperations {
  get: (options?: FloatGetOptionalParams) => Promise<FloatProperty>;
  put: (body: FloatProperty, options?: FloatPutOptionalParams) => Promise<void>;
}

export function getFloat(context: ValueTypesContext) {
  return {
    get: (options?: FloatGetOptionalParams) => floatGet(context, options),
    put: (body: FloatProperty, options?: FloatPutOptionalParams) =>
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
