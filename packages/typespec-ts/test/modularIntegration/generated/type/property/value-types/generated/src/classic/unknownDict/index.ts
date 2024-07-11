// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { UnknownDictProperty } from "../../models/models.js";
import { unknownDictGet, unknownDictPut } from "../../api/unknownDict/index.js";
import {
  UnknownDictGetOptionalParams,
  UnknownDictPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a UnknownDict operations. */
export interface UnknownDictOperations {
  /** Get call */
  get: (options?: UnknownDictGetOptionalParams) => Promise<UnknownDictProperty>;
  /** Put operation */
  put: (
    body: UnknownDictProperty,
    options?: UnknownDictPutOptionalParams,
  ) => Promise<void>;
}

export function getUnknownDict(context: ValueTypesContext) {
  return {
    get: (options?: UnknownDictGetOptionalParams) =>
      unknownDictGet(context, options),
    put: (body: UnknownDictProperty, options?: UnknownDictPutOptionalParams) =>
      unknownDictPut(context, body, options),
  };
}

export function getUnknownDictOperations(
  context: ValueTypesContext,
): UnknownDictOperations {
  return {
    ...getUnknownDict(context),
  };
}
