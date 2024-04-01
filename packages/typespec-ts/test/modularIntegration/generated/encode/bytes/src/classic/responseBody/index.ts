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
  DefaultOptions,
  OctetStreamOptions,
  CustomContentTypeOptions,
  Base64Options,
  Base64urlOptions,
} from "../../models/options.js";

export interface ResponseBodyOperations {
  default: (options?: DefaultOptions) => Promise<Uint8Array>;
  octetStream: (options?: OctetStreamOptions) => Promise<Uint8Array>;
  customContentType: (
    options?: CustomContentTypeOptions,
  ) => Promise<Uint8Array>;
  base64: (options?: Base64Options) => Promise<Uint8Array>;
  base64url: (options?: Base64urlOptions) => Promise<Uint8Array>;
}

export function getResponseBody(context: BytesContext) {
  return {
    default: (options?: DefaultOptions) =>
      responseBodyDefault(context, options),
    octetStream: (options?: OctetStreamOptions) =>
      responseBodyOctetStream(context, options),
    customContentType: (options?: CustomContentTypeOptions) =>
      responseBodyCustomContentType(context, options),
    base64: (options?: Base64Options) => responseBodyBase64(context, options),
    base64url: (options?: Base64urlOptions) =>
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
