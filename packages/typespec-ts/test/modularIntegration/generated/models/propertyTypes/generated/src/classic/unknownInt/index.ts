// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownIntProperty } from "../../models/models.js";
import { unknownIntGet, unknownIntPut } from "../../api/unknownInt/index.js";
import {
  UnknownIntGetOptions,
  UnknownIntPutOptions,
} from "../../models/options.js";

export interface UnknownIntOperations {
  get: (options?: UnknownIntGetOptions) => Promise<UnknownIntProperty>;
  put: (
    body: UnknownIntProperty,
    options?: UnknownIntPutOptions,
  ) => Promise<void>;
}

export function getUnknownInt(context: ValueTypesContext) {
  return {
    get: (options?: UnknownIntGetOptions) => unknownIntGet(context, options),
    put: (body: UnknownIntProperty, options?: UnknownIntPutOptions) =>
      unknownIntPut(context, body, options),
  };
}

export function getUnknownIntOperations(
  context: ValueTypesContext,
): UnknownIntOperations {
  return {
    ...getUnknownInt(context),
  };
}
