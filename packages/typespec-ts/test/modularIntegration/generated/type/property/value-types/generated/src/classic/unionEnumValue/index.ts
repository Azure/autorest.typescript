// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { UnionEnumValueProperty } from "../../models/models.js";
import {
  unionEnumValueGet,
  unionEnumValuePut,
} from "../../api/unionEnumValue/index.js";
import {
  UnionEnumValueGetOptionalParams,
  UnionEnumValuePutOptionalParams,
} from "../../models/options.js";

/** Interface representing a UnionEnumValue operations. */
export interface UnionEnumValueOperations {
  /** Get call */
  get: (
    options?: UnionEnumValueGetOptionalParams,
  ) => Promise<UnionEnumValueProperty>;
  /** Put operation */
  put: (
    body: UnionEnumValueProperty,
    options?: UnionEnumValuePutOptionalParams,
  ) => Promise<void>;
}

export function getUnionEnumValue(context: ValueTypesContext) {
  return {
    get: (options?: UnionEnumValueGetOptionalParams) =>
      unionEnumValueGet(context, options),
    put: (
      body: UnionEnumValueProperty,
      options?: UnionEnumValuePutOptionalParams,
    ) => unionEnumValuePut(context, body, options),
  };
}

export function getUnionEnumValueOperations(
  context: ValueTypesContext,
): UnionEnumValueOperations {
  return {
    ...getUnionEnumValue(context),
  };
}
