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
} from "../../api/options.js";

/** Interface representing a Bytes operations. */
export interface BytesOperations {
  /** Get models that will return all properties in the model */
  getNonNull: (
    options?: BytesGetNonNullOptionalParams,
  ) => Promise<BytesProperty>;
  /** Get models that will return the default object */
  getNull: (options?: BytesGetNullOptionalParams) => Promise<BytesProperty>;
  /** Put a body with all properties present. */
  patchNonNull: (
    body: BytesProperty,
    options?: BytesPatchNonNullOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
