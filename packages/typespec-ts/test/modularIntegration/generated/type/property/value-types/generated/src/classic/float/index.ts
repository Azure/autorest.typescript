// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { FloatProperty } from "../../models/models.js";
import { floatGet, floatPut } from "../../api/float/index.js";
import {
  FloatGetOptionalParams,
  FloatPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a Float operations. */
export interface FloatOperations {
  /** Get call */
  get: (options?: FloatGetOptionalParams) => Promise<FloatProperty>;
  /** Put operation */
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
