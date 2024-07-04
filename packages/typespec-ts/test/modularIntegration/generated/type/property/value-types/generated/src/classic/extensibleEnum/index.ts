// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { ExtensibleEnumProperty } from "../../models/models.js";
import {
  extensibleEnumGet,
  extensibleEnumPut,
} from "../../api/extensibleEnum/index.js";
import {
  ExtensibleEnumGetOptionalParams,
  ExtensibleEnumPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a ExtensibleEnum operations. */
export interface ExtensibleEnumOperations {
  /** Get call */
  get: (
    options?: ExtensibleEnumGetOptionalParams,
  ) => Promise<ExtensibleEnumProperty>;
  /** Put operation */
  put: (
    body: ExtensibleEnumProperty,
    options?: ExtensibleEnumPutOptionalParams,
  ) => Promise<void>;
}

export function getExtensibleEnum(context: ValueTypesContext) {
  return {
    get: (options?: ExtensibleEnumGetOptionalParams) =>
      extensibleEnumGet(context, options),
    put: (
      body: ExtensibleEnumProperty,
      options?: ExtensibleEnumPutOptionalParams,
    ) => extensibleEnumPut(context, body, options),
  };
}

export function getExtensibleEnumOperations(
  context: ValueTypesContext,
): ExtensibleEnumOperations {
  return {
    ...getExtensibleEnum(context),
  };
}
