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
  ResponseBodyDefaultOptionalParams,
  ResponseBodyOctetStreamOptionalParams,
  ResponseBodyCustomContentTypeOptionalParams,
  ResponseBodyBase64OptionalParams,
  ResponseBodyBase64urlOptionalParams,
} from "../../models/options.js";

export interface ResponseBodyOperations {
  default: (options?: ResponseBodyDefaultOptionalParams) => Promise<Uint8Array>;
  octetStream: (
    options?: ResponseBodyOctetStreamOptionalParams,
  ) => Promise<Uint8Array>;
  customContentType: (
    options?: ResponseBodyCustomContentTypeOptionalParams,
  ) => Promise<Uint8Array>;
  base64: (options?: ResponseBodyBase64OptionalParams) => Promise<Uint8Array>;
  base64url: (
    options?: ResponseBodyBase64urlOptionalParams,
  ) => Promise<Uint8Array>;
}

export function getResponseBody(context: BytesContext) {
  return {
    default: (options?: ResponseBodyDefaultOptionalParams) =>
      responseBodyDefault(context, options),
    octetStream: (options?: ResponseBodyOctetStreamOptionalParams) =>
      responseBodyOctetStream(context, options),
    customContentType: (
      options?: ResponseBodyCustomContentTypeOptionalParams,
    ) => responseBodyCustomContentType(context, options),
    base64: (options?: ResponseBodyBase64OptionalParams) =>
      responseBodyBase64(context, options),
    base64url: (options?: ResponseBodyBase64urlOptionalParams) =>
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
