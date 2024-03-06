// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { BytesProperty } from "../../models/models.js";
import {
  bytesGetAll,
  bytesGetDefault,
  bytesPutAll,
  bytesPutDefault,
} from "../../api/bytes/index.js";
import {
  BytesGetAllOptions,
  BytesGetDefaultOptions,
  BytesPutAllOptions,
  BytesPutDefaultOptions,
} from "../../models/options.js";

export interface BytesOperations {
  getAll: (options?: BytesGetAllOptions) => Promise<BytesProperty>;
  getDefault: (options?: BytesGetDefaultOptions) => Promise<BytesProperty>;
  putAll: (body: BytesProperty, options?: BytesPutAllOptions) => Promise<void>;
  putDefault: (
    body: BytesProperty,
    options?: BytesPutDefaultOptions,
  ) => Promise<void>;
}

export function getBytes(context: OptionalContext) {
  return {
    getAll: (options?: BytesGetAllOptions) => bytesGetAll(context, options),
    getDefault: (options?: BytesGetDefaultOptions) =>
      bytesGetDefault(context, options),
    putAll: (body: BytesProperty, options?: BytesPutAllOptions) =>
      bytesPutAll(context, body, options),
    putDefault: (body: BytesProperty, options?: BytesPutDefaultOptions) =>
      bytesPutDefault(context, body, options),
  };
}

export function getBytesOperations(context: OptionalContext): BytesOperations {
  return {
    ...getBytes(context),
  };
}
