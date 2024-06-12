// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  unknownValueGet,
  unknownValuePut,
} from "../../api/unknownValue/index.js";
import {
  UnknownValueGetOptionalParams,
  UnknownValuePutOptionalParams,
} from "../../models/options.js";

export interface UnknownValueOperations {
  get: (options?: UnknownValueGetOptionalParams) => Promise<any[]>;
  put: (body: any[], options?: UnknownValuePutOptionalParams) => Promise<void>;
}

export function getUnknownValue(context: ArrayContext) {
  return {
    get: (options?: UnknownValueGetOptionalParams) =>
      unknownValueGet(context, options),
    put: (body: any[], options?: UnknownValuePutOptionalParams) =>
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
