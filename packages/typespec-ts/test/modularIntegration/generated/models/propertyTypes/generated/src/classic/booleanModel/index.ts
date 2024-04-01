// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BooleanProperty } from "../../models/models.js";
import {
  booleanModelGet,
  booleanModelPut,
} from "../../api/booleanModel/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface BooleanModelOperations {
  get: (options?: GetOptions) => Promise<BooleanProperty>;
  put: (body: BooleanProperty, options?: PutOptions) => Promise<void>;
}

export function getBooleanModel(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => booleanModelGet(context, options),
    put: (body: BooleanProperty, options?: PutOptions) =>
      booleanModelPut(context, body, options),
  };
}

export function getBooleanModelOperations(
  context: ValueTypesContext,
): BooleanModelOperations {
  return {
    ...getBooleanModel(context),
  };
}
