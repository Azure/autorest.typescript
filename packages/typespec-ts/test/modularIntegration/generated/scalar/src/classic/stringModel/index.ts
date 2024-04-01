// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import { stringModelGet, stringModelPut } from "../../api/stringModel/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface StringModelOperations {
  get: (options?: GetOptions) => Promise<string>;
  put: (body: string, options?: PutOptions) => Promise<void>;
}

export function getStringModel(context: ScalarContext) {
  return {
    get: (options?: GetOptions) => stringModelGet(context, options),
    put: (body: string, options?: PutOptions) =>
      stringModelPut(context, body, options),
  };
}

export function getStringModelOperations(
  context: ScalarContext,
): StringModelOperations {
  return {
    ...getStringModel(context),
  };
}
