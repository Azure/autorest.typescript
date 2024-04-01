// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownArrayProperty } from "../../models/models.js";
import {
  unknownArrayGet,
  unknownArrayPut,
} from "../../api/unknownArray/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnknownArrayOperations {
  get: (options?: GetOptions) => Promise<UnknownArrayProperty>;
  put: (body: UnknownArrayProperty, options?: PutOptions) => Promise<void>;
}

export function getUnknownArray(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unknownArrayGet(context, options),
    put: (body: UnknownArrayProperty, options?: PutOptions) =>
      unknownArrayPut(context, body, options),
  };
}

export function getUnknownArrayOperations(
  context: ValueTypesContext,
): UnknownArrayOperations {
  return {
    ...getUnknownArray(context),
  };
}
