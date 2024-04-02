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
  RequestBodyDefaultOptionalParams,
  RequestBodyOctetStreamOptionalParams,
  RequestBodyCustomContentTypeOptionalParams,
  RequestBodyBase64OptionalParams,
  RequestBodyBase64urlOptionalParams,
} from "../../models/options.js";

export interface RequestBodyOperations {
  default: (
    value: Uint8Array,
    options?: RequestBodyDefaultOptionalParams,
  ) => Promise<void>;
  octetStream: (
    value: Uint8Array,
    options?: RequestBodyOctetStreamOptionalParams,
  ) => Promise<void>;
  customContentType: (
    value: Uint8Array,
    options?: RequestBodyCustomContentTypeOptionalParams,
  ) => Promise<void>;
  base64: (
    value: Uint8Array,
    options?: RequestBodyBase64OptionalParams,
  ) => Promise<void>;
  base64url: (
    value: Uint8Array,
    options?: RequestBodyBase64urlOptionalParams,
  ) => Promise<void>;
}

export function getRequestBody(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: RequestBodyDefaultOptionalParams) =>
      requestBodyDefault(context, value, options),
    octetStream: (
      value: Uint8Array,
      options?: RequestBodyOctetStreamOptionalParams,
    ) => requestBodyOctetStream(context, value, options),
    customContentType: (
      value: Uint8Array,
      options?: RequestBodyCustomContentTypeOptionalParams,
    ) => requestBodyCustomContentType(context, value, options),
    base64: (value: Uint8Array, options?: RequestBodyBase64OptionalParams) =>
      requestBodyBase64(context, value, options),
    base64url: (
      value: Uint8Array,
      options?: RequestBodyBase64urlOptionalParams,
    ) => requestBodyBase64url(context, value, options),
  };
}

export function getRequestBodyOperations(
  context: BytesContext,
): RequestBodyOperations {
  return {
    ...getRequestBody(context),
  };
}
