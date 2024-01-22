// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/NullableContext.js";
import { BytesProperty } from "../../models/models.js";
import {
  bytesGetNonNull,
  bytesGetNull,
  bytesPatchNonNull,
  bytesPatchNull,
} from "../../api/bytes/index.js";
import {
  BytesGetNonNullOptions,
  BytesGetNullOptions,
  BytesPatchNonNullOptions,
  BytesPatchNullOptions,
} from "../../models/options.js";

export interface BytesOperations {
  getNonNull: (options?: BytesGetNonNullOptions) => Promise<BytesProperty>;
  getNull: (options?: BytesGetNullOptions) => Promise<BytesProperty>;
  patchNonNull: (
    body: BytesProperty,
    options?: BytesPatchNonNullOptions,
  ) => Promise<void>;
  patchNull: (
    body: BytesProperty,
    options?: BytesPatchNullOptions,
  ) => Promise<void>;
}

export function getBytes(context: NullableContext) {
  return {
    getNonNull: (options?: BytesGetNonNullOptions) =>
      bytesGetNonNull(context, options),
    getNull: (options?: BytesGetNullOptions) => bytesGetNull(context, options),
    patchNonNull: (body: BytesProperty, options?: BytesPatchNonNullOptions) =>
      bytesPatchNonNull(context, body, options),
    patchNull: (body: BytesProperty, options?: BytesPatchNullOptions) =>
      bytesPatchNull(context, body, options),
  };
}

export function getBytesOperations(context: NullableContext): BytesOperations {
  return {
    ...getBytes(context),
  };
}
