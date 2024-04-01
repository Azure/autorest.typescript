// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownDictProperty } from "../../models/models.js";
import { unknownDictGet, unknownDictPut } from "../../api/unknownDict/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnknownDictOperations {
  get: (options?: GetOptions) => Promise<UnknownDictProperty>;
  put: (body: UnknownDictProperty, options?: PutOptions) => Promise<void>;
}

export function getUnknownDict(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unknownDictGet(context, options),
    put: (body: UnknownDictProperty, options?: PutOptions) =>
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
