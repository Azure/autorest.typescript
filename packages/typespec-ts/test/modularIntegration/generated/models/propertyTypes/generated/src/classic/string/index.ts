// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { StringProperty } from "../../models/models.js";
import { stringGet, stringPut } from "../../api/string/index.js";
import { StringGetOptions, StringPutOptions } from "../../models/options.js";

export interface StringOperations {
  get: (options?: StringGetOptions) => Promise<StringProperty>;
  put: (body: StringProperty, options?: StringPutOptions) => Promise<void>;
}

export function getString(context: ValueTypesContext) {
  return {
    get: (options?: StringGetOptions) => stringGet(context, options),
    put: (body: StringProperty, options?: StringPutOptions) =>
      stringPut(context, body, options),
  };
}

export function getStringOperations(
  context: ValueTypesContext,
): StringOperations {
  return {
    ...getString(context),
  };
}
