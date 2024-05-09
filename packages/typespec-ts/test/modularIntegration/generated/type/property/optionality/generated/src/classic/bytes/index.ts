// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { BytesProperty } from "../../models/models.js";
import {
  bytesGetAll,
  bytesGetDefault,
  bytesPutAll,
  bytesPutDefault,
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
    getAll: (options?: BytesGetAllOptionalParams) =>
      bytesGetAll(context, options),
    getDefault: (options?: BytesGetDefaultOptionalParams) =>
      bytesGetDefault(context, options),
    putAll: (body: BytesProperty, options?: BytesPutAllOptionalParams) =>
      bytesPutAll(context, body, options),
    putDefault: (
      body: BytesProperty,
      options?: BytesPutDefaultOptionalParams,
    ) => bytesPutDefault(context, body, options),
  };
}

export function getBytesOperations(context: OptionalContext): BytesOperations {
  return {
    ...getBytes(context),
  };
}
