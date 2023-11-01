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
  RequestBodyRequestBodyDefaultOptions,
  RequestBodyRequestBodyOctetStreamOptions,
  RequestBodyRequestBodyCustomContentTypeOptions,
  RequestBodyRequestBodyBase64Options,
  RequestBodyRequestBodyBase64urlOptions,
} from "../../models/options.js";

export interface RequestBodyOperations {
  requestBodyDefault: (
    value: Uint8Array,
    options?: RequestBodyRequestBodyDefaultOptions
  ) => Promise<void>;
  requestBodyOctetStream: (
    value: Uint8Array,
    options?: RequestBodyRequestBodyOctetStreamOptions
  ) => Promise<void>;
  requestBodyCustomContentType: (
    value: Uint8Array,
    options?: RequestBodyRequestBodyCustomContentTypeOptions
  ) => Promise<void>;
  requestBodyBase64: (
    value: Uint8Array,
    options?: RequestBodyRequestBodyBase64Options
  ) => Promise<void>;
  requestBodyBase64url: (
    value: Uint8Array,
    options?: RequestBodyRequestBodyBase64urlOptions
  ) => Promise<void>;
}

export function getRequestBody(context: BytesContext) {
  return {
    requestBodyDefault: (
      value: Uint8Array,
      options?: RequestBodyRequestBodyDefaultOptions
    ) => requestBodyDefault(context, value, options),
    requestBodyOctetStream: (
      value: Uint8Array,
      options?: RequestBodyRequestBodyOctetStreamOptions
    ) => requestBodyOctetStream(context, value, options),
    requestBodyCustomContentType: (
      value: Uint8Array,
      options?: RequestBodyRequestBodyCustomContentTypeOptions
    ) => requestBodyCustomContentType(context, value, options),
    requestBodyBase64: (
      value: Uint8Array,
      options?: RequestBodyRequestBodyBase64Options
    ) => requestBodyBase64(context, value, options),
    requestBodyBase64url: (
      value: Uint8Array,
      options?: RequestBodyRequestBodyBase64urlOptions
    ) => requestBodyBase64url(context, value, options),
  };
}

export function getRequestBodyOperations(
  context: BytesContext
): RequestBodyOperations {
  return {
    ...getRequestBody(context),
  };
}
