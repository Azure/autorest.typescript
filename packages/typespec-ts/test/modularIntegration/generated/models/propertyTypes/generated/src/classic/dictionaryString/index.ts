// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { DictionaryStringProperty } from "../../models/models.js";
import {
  dictionaryStringGet,
  dictionaryStringPut,
} from "../../api/dictionaryString/index.js";
import {
  DictionaryStringGetOptions,
  DictionaryStringPutOptions,
} from "../../models/options.js";

export interface DictionaryStringOperations {
  get: (
    options?: DictionaryStringGetOptions,
  ) => Promise<DictionaryStringProperty>;
  put: (
    body: DictionaryStringProperty,
    options?: DictionaryStringPutOptions,
  ) => Promise<void>;
}

export function getDictionaryString(context: ValueTypesContext) {
  return {
    get: (options?: DictionaryStringGetOptions) =>
      dictionaryStringGet(context, options),
    put: (
      body: DictionaryStringProperty,
      options?: DictionaryStringPutOptions,
    ) => dictionaryStringPut(context, body, options),
  };
}

export function getDictionaryStringOperations(
  context: ValueTypesContext,
): DictionaryStringOperations {
  return {
    ...getDictionaryString(context),
  };
}
