// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { StringProperty } from "../../models/models.js";
import { stringModelGet, stringModelPut } from "../../api/stringModel/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface StringModelOperations {
  get: (options?: GetOptions) => Promise<StringProperty>;
  put: (body: StringProperty, options?: PutOptions) => Promise<void>;
}

export function getStringModel(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => stringModelGet(context, options),
    put: (body: StringProperty, options?: PutOptions) =>
      stringModelPut(context, body, options),
  };
}

export function getStringModelOperations(
  context: ValueTypesContext,
): StringModelOperations {
  return {
    ...getStringModel(context),
  };
}
