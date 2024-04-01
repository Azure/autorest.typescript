// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { ExtensibleEnumProperty } from "../../models/models.js";
import {
  extensibleEnumGet,
  extensibleEnumPut,
} from "../../api/extensibleEnum/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface ExtensibleEnumOperations {
  get: (options?: GetOptions) => Promise<ExtensibleEnumProperty>;
  put: (body: ExtensibleEnumProperty, options?: PutOptions) => Promise<void>;
}

export function getExtensibleEnum(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => extensibleEnumGet(context, options),
    put: (body: ExtensibleEnumProperty, options?: PutOptions) =>
      extensibleEnumPut(context, body, options),
  };
}

export function getExtensibleEnumOperations(
  context: ValueTypesContext,
): ExtensibleEnumOperations {
  return {
    ...getExtensibleEnum(context),
  };
}
