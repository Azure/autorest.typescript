// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/nullableContext.js";
import { BytesProperty } from "../../models/models.js";
import {
  getNonNull,
  getNull,
  patchNonNull,
  patchNull,
} from "../../api/bytes/index.js";
import {
  BytesGetNonNullOptionalParams,
  BytesGetNullOptionalParams,
  BytesPatchNonNullOptionalParams,
  BytesPatchNullOptionalParams,
} from "../../models/options.js";

export interface BytesOperations {
  getNonNull: (
    options?: BytesGetNonNullOptionalParams,
  ) => Promise<BytesProperty>;
  getNull: (options?: BytesGetNullOptionalParams) => Promise<BytesProperty>;
  patchNonNull: (
    body: BytesProperty,
    options?: BytesPatchNonNullOptionalParams,
  ) => Promise<void>;
  patchNull: (
    body: BytesProperty,
    options?: BytesPatchNullOptionalParams,
  ) => Promise<void>;
}

export function getBytes(context: NullableContext) {
  return {
    getNonNull: (options?: BytesGetNonNullOptionalParams) =>
      getNonNull(context, options),
    getNull: (options?: BytesGetNullOptionalParams) =>
      getNull(context, options),
    patchNonNull: (
      body: BytesProperty,
      options?: BytesPatchNonNullOptionalParams,
    ) => patchNonNull(context, body, options),
    patchNull: (body: BytesProperty, options?: BytesPatchNullOptionalParams) =>
      patchNull(context, body, options),
  };
}

export function getBytesOperations(context: NullableContext): BytesOperations {
  return {
    ...getBytes(context),
  };
}
