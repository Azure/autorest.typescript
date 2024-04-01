// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BytesProperty } from "../../models/models.js";
import { bytesGet, bytesPut } from "../../api/bytes/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface BytesOperations {
  get: (options?: GetOptions) => Promise<BytesProperty>;
  put: (body: BytesProperty, options?: PutOptions) => Promise<void>;
}

export function getBytes(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => bytesGet(context, options),
    put: (body: BytesProperty, options?: PutOptions) =>
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
