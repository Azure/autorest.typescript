// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/float32Value/index.js";
import {
  Float32ValueGetOptionalParams,
  Float32ValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a Float32Value operations. */
export interface Float32ValueOperations {
  get: (
    options?: Float32ValueGetOptionalParams,
  ) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: Float32ValuePutOptionalParams,
  ) => Promise<void>;
}

export function getFloat32Value(context: DictionaryContext) {
  return {
    get: (options?: Float32ValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, number>,
      options?: Float32ValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getFloat32ValueOperations(
  context: DictionaryContext,
): Float32ValueOperations {
  return {
    ...getFloat32Value(context),
  };
}
