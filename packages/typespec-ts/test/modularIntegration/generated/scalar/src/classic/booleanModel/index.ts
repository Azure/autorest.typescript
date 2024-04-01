// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  booleanModelGet,
  booleanModelPut,
} from "../../api/booleanModel/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface BooleanModelOperations {
  get: (options?: GetOptions) => Promise<boolean>;
  put: (body: boolean, options?: PutOptions) => Promise<void>;
}

export function getBooleanModel(context: ScalarContext) {
  return {
    get: (options?: GetOptions) => booleanModelGet(context, options),
    put: (body: boolean, options?: PutOptions) =>
      booleanModelPut(context, body, options),
  };
}

export function getBooleanModelOperations(
  context: ScalarContext,
): BooleanModelOperations {
  return {
    ...getBooleanModel(context),
  };
}
