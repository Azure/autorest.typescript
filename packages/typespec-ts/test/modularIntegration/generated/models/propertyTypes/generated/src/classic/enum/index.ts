// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { EnumProperty } from "../../models/models.js";
import { enumGet, enumPut } from "../../api/enum/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface EnumOperations {
  get: (options?: GetOptions) => Promise<EnumProperty>;
  put: (body: EnumProperty, options?: PutOptions) => Promise<void>;
}

export function getEnum(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => enumGet(context, options),
    put: (body: EnumProperty, options?: PutOptions) =>
      enumPut(context, body, options),
  };
}

export function getEnumOperations(context: ValueTypesContext): EnumOperations {
  return {
    ...getEnum(context),
  };
}
