// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { ExtensibleEnumProperty } from "../../models/models.js";
import {
  extensibleEnumGet,
  extensibleEnumPut,
} from "../../api/extensibleEnum/index.js";
import {
  ExtensibleEnumGetOptions,
  ExtensibleEnumPutOptions,
} from "../../models/options.js";

export interface ExtensibleEnumOperations {
  get: (options?: ExtensibleEnumGetOptions) => Promise<ExtensibleEnumProperty>;
  put: (
    body: ExtensibleEnumProperty,
    options?: ExtensibleEnumPutOptions,
  ) => Promise<void>;
}

export function getExtensibleEnum(context: ValueTypesContext) {
  return {
    get: (options?: ExtensibleEnumGetOptions) =>
      extensibleEnumGet(context, options),
    put: (body: ExtensibleEnumProperty, options?: ExtensibleEnumPutOptions) =>
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
