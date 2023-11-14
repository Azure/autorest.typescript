// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import {
  float32ValueGet,
  float32ValuePut,
} from "../../api/float32Value/index.js";
import {
  Float32ValueGetOptions,
  Float32ValuePutOptions,
} from "../../models/options.js";

export interface Float32ValueOperations {
  get: (options?: Float32ValueGetOptions) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: Float32ValuePutOptions
  ) => Promise<void>;
}

export function getFloat32Value(context: DictionaryContext) {
  return {
    get: (options?: Float32ValueGetOptions) =>
      float32ValueGet(context, options),
    put: (body: Record<string, number>, options?: Float32ValuePutOptions) =>
      float32ValuePut(context, body, options),
  };
}

export function getFloat32ValueOperations(
  context: DictionaryContext
): Float32ValueOperations {
  return {
    ...getFloat32Value(context),
  };
}
