// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BytesProperty } from "../../models/models.js";
import { bytesGet, bytesPut } from "../../api/bytes/index.js";
import { BytesGetOptions, BytesPutOptions } from "../../models/options.js";

export interface BytesOperations {
  get: (options?: BytesGetOptions) => Promise<BytesProperty>;
  put: (body: BytesProperty, options?: BytesPutOptions) => Promise<void>;
}

export function getBytes(context: ValueTypesContext) {
  return {
    get: (options?: BytesGetOptions) => bytesGet(context, options),
    put: (body: BytesProperty, options?: BytesPutOptions) =>
      bytesPut(context, body, options),
  };
}

export function getBytesOperations(
  context: ValueTypesContext,
): BytesOperations {
  return {
    ...getBytes(context),
  };
}
