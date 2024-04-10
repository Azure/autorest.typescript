// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BytesProperty } from "../../models/models.js";
import { bytesGet, bytesPut } from "../../api/bytes/index.js";
import {
  BytesGetOptionalParams,
  BytesPutOptionalParams,
} from "../../models/options.js";

export interface BytesOperations {
  get: (options?: BytesGetOptionalParams) => Promise<BytesProperty>;
  put: (body: BytesProperty, options?: BytesPutOptionalParams) => Promise<void>;
}

export function getBytes(context: ValueTypesContext) {
  return {
    get: (options?: BytesGetOptionalParams) => bytesGet(context, options),
    put: (body: BytesProperty, options?: BytesPutOptionalParams) =>
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
