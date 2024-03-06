// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownStringProperty } from "../../models/models.js";
import {
  unknownStringGet,
  unknownStringPut,
} from "../../api/unknownString/index.js";
import {
  UnknownStringGetOptions,
  UnknownStringPutOptions,
} from "../../models/options.js";

export interface UnknownStringOperations {
  get: (options?: UnknownStringGetOptions) => Promise<UnknownStringProperty>;
  put: (
    body: UnknownStringProperty,
    options?: UnknownStringPutOptions,
  ) => Promise<void>;
}

export function getUnknownString(context: ValueTypesContext) {
  return {
    get: (options?: UnknownStringGetOptions) =>
      unknownStringGet(context, options),
    put: (body: UnknownStringProperty, options?: UnknownStringPutOptions) =>
      unknownStringPut(context, body, options),
  };
}

export function getUnknownStringOperations(
  context: ValueTypesContext,
): UnknownStringOperations {
  return {
    ...getUnknownString(context),
  };
}
