// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownDictProperty } from "../../models/models.js";
import { unknownDictGet, unknownDictPut } from "../../api/unknownDict/index.js";
import {
  UnknownDictGetOptions,
  UnknownDictPutOptions,
} from "../../models/options.js";

export interface UnknownDictOperations {
  get: (options?: UnknownDictGetOptions) => Promise<UnknownDictProperty>;
  put: (
    body: UnknownDictProperty,
    options?: UnknownDictPutOptions,
  ) => Promise<void>;
}

export function getUnknownDict(context: ValueTypesContext) {
  return {
    get: (options?: UnknownDictGetOptions) => unknownDictGet(context, options),
    put: (body: UnknownDictProperty, options?: UnknownDictPutOptions) =>
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
