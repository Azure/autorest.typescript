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
  RequestBodyDefaultOptions,
  RequestBodyOctetStreamOptions,
  RequestBodyCustomContentTypeOptions,
  RequestBodyBase64Options,
  RequestBodyBase64urlOptions,
} from "../../models/options.js";

export interface RequestBodyOperations {
  default: (
    value: Uint8Array,
    options?: RequestBodyDefaultOptions,
  ) => Promise<void>;
  octetStream: (
    value: Uint8Array,
    options?: RequestBodyOctetStreamOptions,
  ) => Promise<void>;
  customContentType: (
    value: Uint8Array,
    options?: RequestBodyCustomContentTypeOptions,
  ) => Promise<void>;
  base64: (
    value: Uint8Array,
    options?: RequestBodyBase64Options,
  ) => Promise<void>;
  base64url: (
    value: Uint8Array,
    options?: RequestBodyBase64urlOptions,
  ) => Promise<void>;
}

export function getRequestBody(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: RequestBodyDefaultOptions) =>
      requestBodyDefault(context, value, options),
    octetStream: (value: Uint8Array, options?: RequestBodyOctetStreamOptions) =>
      requestBodyOctetStream(context, value, options),
    customContentType: (
      value: Uint8Array,
      options?: RequestBodyCustomContentTypeOptions,
    ) => requestBodyCustomContentType(context, value, options),
    base64: (value: Uint8Array, options?: RequestBodyBase64Options) =>
      requestBodyBase64(context, value, options),
    base64url: (value: Uint8Array, options?: RequestBodyBase64urlOptions) =>
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
