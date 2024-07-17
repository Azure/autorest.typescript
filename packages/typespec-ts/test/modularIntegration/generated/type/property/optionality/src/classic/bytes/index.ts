// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { BytesProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/bytes/index.js";
import {
  BytesGetAllOptionalParams,
  BytesGetDefaultOptionalParams,
  BytesPutAllOptionalParams,
  BytesPutDefaultOptionalParams,
} from "../../api/options.js";

/** Interface representing a Bytes operations. */
export interface BytesOperations {
  /** Get models that will return all properties in the model */
  getAll: (options?: BytesGetAllOptionalParams) => Promise<BytesProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: BytesGetDefaultOptionalParams,
  ) => Promise<BytesProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: BytesProperty,
    options?: BytesPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: BytesProperty,
    options?: BytesPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getBytes(context: OptionalContext) {
  return {
    getAll: (options?: BytesGetAllOptionalParams) => getAll(context, options),
    getDefault: (options?: BytesGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (body: BytesProperty, options?: BytesPutAllOptionalParams) =>
      putAll(context, body, options),
    putDefault: (
      body: BytesProperty,
      options?: BytesPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getBytesOperations(context: OptionalContext): BytesOperations {
  return {
    ...getBytes(context),
  };
}
