// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownArrayProperty } from "../../models/models.js";
import {
  unknownArrayGet,
  unknownArrayPut,
} from "../../api/unknownArray/index.js";
import {
  UnknownArrayGetOptions,
  UnknownArrayPutOptions,
} from "../../models/options.js";

export interface UnknownArrayOperations {
  get: (options?: UnknownArrayGetOptions) => Promise<UnknownArrayProperty>;
  put: (
    body: UnknownArrayProperty,
    options?: UnknownArrayPutOptions,
  ) => Promise<void>;
}

export function getUnknownArray(context: ValueTypesContext) {
  return {
    get: (options?: UnknownArrayGetOptions) =>
      unknownArrayGet(context, options),
    put: (body: UnknownArrayProperty, options?: UnknownArrayPutOptions) =>
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
