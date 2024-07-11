// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { DictionaryStringProperty } from "../../models/models.js";
import {
  dictionaryStringGet,
  dictionaryStringPut,
} from "../../api/dictionaryString/index.js";
import {
  DictionaryStringGetOptionalParams,
  DictionaryStringPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a DictionaryString operations. */
export interface DictionaryStringOperations {
  /** Get call */
  get: (
    options?: DictionaryStringGetOptionalParams,
  ) => Promise<DictionaryStringProperty>;
  /** Put operation */
  put: (
    body: DictionaryStringProperty,
    options?: DictionaryStringPutOptionalParams,
  ) => Promise<void>;
}

export function getDictionaryString(context: ValueTypesContext) {
  return {
    get: (options?: DictionaryStringGetOptionalParams) =>
      dictionaryStringGet(context, options),
    put: (
      body: DictionaryStringProperty,
      options?: DictionaryStringPutOptionalParams,
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
