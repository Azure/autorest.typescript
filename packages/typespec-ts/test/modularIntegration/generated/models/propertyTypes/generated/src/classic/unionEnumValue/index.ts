// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnionEnumValueProperty } from "../../models/models.js";
import {
  unionEnumValueGet,
  unionEnumValuePut,
} from "../../api/unionEnumValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnionEnumValueOperations {
  get: (options?: GetOptions) => Promise<UnionEnumValueProperty>;
  put: (body: UnionEnumValueProperty, options?: PutOptions) => Promise<void>;
}

export function getUnionEnumValue(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unionEnumValueGet(context, options),
    put: (body: UnionEnumValueProperty, options?: PutOptions) =>
      unionEnumValuePut(context, body, options),
  };
}

export function getUnionEnumValueOperations(
  context: ValueTypesContext,
): UnionEnumValueOperations {
  return {
    ...getUnionEnumValue(context),
  };
}