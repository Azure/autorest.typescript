// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createBytes,
  BytesClientOptions,
  BytesContext,
} from "./BytesContext.js";
export {
  headerDefault,
  headerBase64,
  headerBase64url,
  headerBase64urlArray,
} from "./header/index.js";
export {
  propertyDefault,
  propertyBase64,
  propertyBase64url,
  propertyBase64urlArray,
} from "./property/index.js";
export {
  queryDefault,
  queryBase64,
  queryBase64url,
  queryBase64urlArray,
} from "./query/index.js";
export {
  requestBodyDefault,
  requestBodyOctetStream,
  requestBodyCustomContentType,
  requestBodyBase64,
  requestBodyBase64url,
} from "./requestBody/index.js";
export {
  responseBodyDefault,
  responseBodyOctetStream,
  responseBodyCustomContentType,
  responseBodyBase64,
  responseBodyBase64url,
} from "./responseBody/index.js";
