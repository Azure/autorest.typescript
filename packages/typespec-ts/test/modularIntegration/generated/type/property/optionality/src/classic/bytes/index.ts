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
} from "../../models/options.js";

export interface BytesOperations {
  getAll: (options?: BytesGetAllOptionalParams) => Promise<BytesProperty>;
  getDefault: (
    options?: BytesGetDefaultOptionalParams,
  ) => Promise<BytesProperty>;
  putAll: (
    body: BytesProperty,
    options?: BytesPutAllOptionalParams,
  ) => Promise<void>;
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
