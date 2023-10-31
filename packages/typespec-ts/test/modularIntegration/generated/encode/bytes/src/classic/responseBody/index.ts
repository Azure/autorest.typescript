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
  ResponseBodyResponseBodyDefaultOptions,
  ResponseBodyResponseBodyOctetStreamOptions,
  ResponseBodyResponseBodyCustomContentTypeOptions,
  ResponseBodyResponseBodyBase64Options,
  ResponseBodyResponseBodyBase64urlOptions,
} from "../../models/options.js";

export interface ResponseBodyOperations {
  default: (
    options?: ResponseBodyResponseBodyDefaultOptions
  ) => Promise<Uint8Array>;
  octetStream: (
    options?: ResponseBodyResponseBodyOctetStreamOptions
  ) => Promise<Uint8Array>;
  customContentType: (
    options?: ResponseBodyResponseBodyCustomContentTypeOptions
  ) => Promise<Uint8Array>;
  base64: (
    options?: ResponseBodyResponseBodyBase64Options
  ) => Promise<Uint8Array>;
  base64url: (
    options?: ResponseBodyResponseBodyBase64urlOptions
  ) => Promise<Uint8Array>;
}

export function getResponseBody(context: BytesContext) {
  return {
    default: (options?: ResponseBodyResponseBodyDefaultOptions) =>
      responseBodyDefault(context, options),
    octetStream: (options?: ResponseBodyResponseBodyOctetStreamOptions) =>
      responseBodyOctetStream(context, options),
    customContentType: (
      options?: ResponseBodyResponseBodyCustomContentTypeOptions
    ) => responseBodyCustomContentType(context, options),
    base64: (options?: ResponseBodyResponseBodyBase64Options) =>
      responseBodyBase64(context, options),
    base64url: (options?: ResponseBodyResponseBodyBase64urlOptions) =>
      responseBodyBase64url(context, options),
  };
}

export function getResponseBodyOperations(
  context: BytesContext
): ResponseBodyOperations {
  return {
    ...getResponseBody(context),
  };
}
