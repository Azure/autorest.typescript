// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesContext } from "../../api/BytesContext.js";
import {
  requestBodyDefault,
  requestBodyOctetStream,
  requestBodyCustomContentType,
  requestBodyBase64,
  requestBodyBase64url,
} from "../../api/requestBody/index.js";
import {
  DefaultOptions,
  OctetStreamOptions,
  CustomContentTypeOptions,
  Base64Options,
  Base64urlOptions,
} from "../../models/options.js";

export interface RequestBodyOperations {
  default: (value: Uint8Array, options?: DefaultOptions) => Promise<void>;
  octetStream: (
    value: Uint8Array,
    options?: OctetStreamOptions,
  ) => Promise<void>;
  customContentType: (
    value: Uint8Array,
    options?: CustomContentTypeOptions,
  ) => Promise<void>;
  base64: (value: Uint8Array, options?: Base64Options) => Promise<void>;
  base64url: (value: Uint8Array, options?: Base64urlOptions) => Promise<void>;
}

export function getRequestBody(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: DefaultOptions) =>
      requestBodyDefault(context, value, options),
    octetStream: (value: Uint8Array, options?: OctetStreamOptions) =>
      requestBodyOctetStream(context, value, options),
    customContentType: (
      value: Uint8Array,
      options?: CustomContentTypeOptions,
    ) => requestBodyCustomContentType(context, value, options),
    base64: (value: Uint8Array, options?: Base64Options) =>
      requestBodyBase64(context, value, options),
    base64url: (value: Uint8Array, options?: Base64urlOptions) =>
      requestBodyBase64url(context, value, options),
  };
}

export function getRequestBodyOperations(
  context: BytesContext,
): RequestBodyOperations {
  return {
    ...getRequestBody(context),
  };
}
