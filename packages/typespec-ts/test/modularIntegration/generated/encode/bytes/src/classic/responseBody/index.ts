// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesContext } from "../../api/BytesContext.js";
import {
  responseBodyDefault,
  responseBodyOctetStream,
  responseBodyCustomContentType,
  responseBodyBase64,
  responseBodyBase64url,
} from "../../api/responseBody/index.js";
import {
  ResponseBodyDefaultOptions,
  ResponseBodyOctetStreamOptions,
  ResponseBodyCustomContentTypeOptions,
  ResponseBodyBase64Options,
  ResponseBodyBase64urlOptions,
} from "../../models/options.js";

export interface ResponseBodyOperations {
  default: (options?: ResponseBodyDefaultOptions) => Promise<Uint8Array>;
  octetStream: (
    options?: ResponseBodyOctetStreamOptions,
  ) => Promise<Uint8Array>;
  customContentType: (
    options?: ResponseBodyCustomContentTypeOptions,
  ) => Promise<Uint8Array>;
  base64: (options?: ResponseBodyBase64Options) => Promise<Uint8Array>;
  base64url: (options?: ResponseBodyBase64urlOptions) => Promise<Uint8Array>;
}

export function getResponseBody(context: BytesContext) {
  return {
    default: (options?: ResponseBodyDefaultOptions) =>
      responseBodyDefault(context, options),
    octetStream: (options?: ResponseBodyOctetStreamOptions) =>
      responseBodyOctetStream(context, options),
    customContentType: (options?: ResponseBodyCustomContentTypeOptions) =>
      responseBodyCustomContentType(context, options),
    base64: (options?: ResponseBodyBase64Options) =>
      responseBodyBase64(context, options),
    base64url: (options?: ResponseBodyBase64urlOptions) =>
      responseBodyBase64url(context, options),
  };
}

export function getResponseBodyOperations(
  context: BytesContext,
): ResponseBodyOperations {
  return {
    ...getResponseBody(context),
  };
}
