// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { EnumProperty } from "../../models/models.js";
import { enumGet, enumPut } from "../../api/enum/index.js";
import { EnumGetOptions, EnumPutOptions } from "../../models/options.js";

export interface EnumOperations {
  get: (options?: EnumGetOptions) => Promise<EnumProperty>;
  put: (body: EnumProperty, options?: EnumPutOptions) => Promise<void>;
}

export function getEnum(context: ValueTypesContext) {
  return {
    get: (options?: EnumGetOptions) => enumGet(context, options),
    put: (body: EnumProperty, options?: EnumPutOptions) =>
      enumPut(context, body, options),
  };
}

export function getEnumOperations(context: ValueTypesContext): EnumOperations {
  return {
    ...getEnum(context),
  };
}
