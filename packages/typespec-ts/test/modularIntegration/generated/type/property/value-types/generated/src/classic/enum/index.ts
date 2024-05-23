// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { EnumProperty } from "../../models/models.js";
import { enumGet, enumPut } from "../../api/enum/index.js";
import {
  EnumGetOptionalParams,
  EnumPutOptionalParams,
} from "../../models/options.js";

export interface EnumOperations {
  get: (options?: EnumGetOptionalParams) => Promise<EnumProperty>;
  put: (body: EnumProperty, options?: EnumPutOptionalParams) => Promise<void>;
}

export function getEnum(context: ValueTypesContext) {
  return {
    get: (options?: EnumGetOptionalParams) => enumGet(context, options),
    put: (body: EnumProperty, options?: EnumPutOptionalParams) =>
      enumPut(context, body, options),
  };
}

export function getEnumOperations(context: ValueTypesContext): EnumOperations {
  return {
    ...getEnum(context),
  };
}
