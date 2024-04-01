// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { UnknownStringProperty } from "../../models/models.js";
import {
  unknownStringGet,
  unknownStringPut,
} from "../../api/unknownString/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnknownStringOperations {
  get: (options?: GetOptions) => Promise<UnknownStringProperty>;
  put: (body: UnknownStringProperty, options?: PutOptions) => Promise<void>;
}

export function getUnknownString(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => unknownStringGet(context, options),
    put: (body: UnknownStringProperty, options?: PutOptions) =>
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
