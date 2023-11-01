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
  responseBodyDefault: (
    options?: ResponseBodyResponseBodyDefaultOptions
  ) => Promise<Uint8Array>;
  responseBodyOctetStream: (
    options?: ResponseBodyResponseBodyOctetStreamOptions
  ) => Promise<Uint8Array>;
  responseBodyCustomContentType: (
    options?: ResponseBodyResponseBodyCustomContentTypeOptions
  ) => Promise<Uint8Array>;
  responseBodyBase64: (
    options?: ResponseBodyResponseBodyBase64Options
  ) => Promise<Uint8Array>;
  responseBodyBase64url: (
    options?: ResponseBodyResponseBodyBase64urlOptions
  ) => Promise<Uint8Array>;
}

export function getResponseBody(context: BytesContext) {
  return {
    responseBodyDefault: (options?: ResponseBodyResponseBodyDefaultOptions) =>
      responseBodyDefault(context, options),
    responseBodyOctetStream: (
      options?: ResponseBodyResponseBodyOctetStreamOptions
    ) => responseBodyOctetStream(context, options),
    responseBodyCustomContentType: (
      options?: ResponseBodyResponseBodyCustomContentTypeOptions
    ) => responseBodyCustomContentType(context, options),
    responseBodyBase64: (options?: ResponseBodyResponseBodyBase64Options) =>
      responseBodyBase64(context, options),
    responseBodyBase64url: (
      options?: ResponseBodyResponseBodyBase64urlOptions
    ) => responseBodyBase64url(context, options),
  };
}

export function getResponseBodyOperations(
  context: BytesContext
): ResponseBodyOperations {
  return {
    ...getResponseBody(context),
  };
}
