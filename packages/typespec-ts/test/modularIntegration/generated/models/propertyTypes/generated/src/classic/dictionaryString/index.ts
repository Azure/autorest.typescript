// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { DictionaryStringProperty } from "../../models/models.js";
import {
  dictionaryStringGet,
  dictionaryStringPut,
} from "../../api/dictionaryString/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface DictionaryStringOperations {
  get: (options?: GetOptions) => Promise<DictionaryStringProperty>;
  put: (body: DictionaryStringProperty, options?: PutOptions) => Promise<void>;
}

export function getDictionaryString(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => dictionaryStringGet(context, options),
    put: (body: DictionaryStringProperty, options?: PutOptions) =>
      dictionaryStringPut(context, body, options),
  };
}

export function getDictionaryStringOperations(
  context: ValueTypesContext,
): DictionaryStringOperations {
  return {
    ...getDictionaryString(context),
  };
}
