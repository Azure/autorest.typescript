// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownIntProperty } from "../../models/models.js";
import { unknownIntGet, unknownIntPut } from "../../api/unknownInt/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnknownIntOperations {
  get: (options?: GetOptions) => Promise<UnknownIntProperty>;
  put: (body: UnknownIntProperty, options?: PutOptions) => Promise<void>;
}

export function getUnknownInt(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unknownIntGet(context, options),
    put: (body: UnknownIntProperty, options?: PutOptions) =>
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
