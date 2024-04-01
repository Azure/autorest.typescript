// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  unknownValueGet,
  unknownValuePut,
} from "../../api/unknownValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnknownValueOperations {
  get: (options?: GetOptions) => Promise<unknown[]>;
  put: (body: unknown[], options?: PutOptions) => Promise<void>;
}

export function getUnknownValue(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => unknownValueGet(context, options),
    put: (body: unknown[], options?: PutOptions) =>
      unknownValuePut(context, body, options),
  };
}

export function getUnknownValueOperations(
  context: ArrayContext,
): UnknownValueOperations {
  return {
    ...getUnknownValue(context),
  };
}
