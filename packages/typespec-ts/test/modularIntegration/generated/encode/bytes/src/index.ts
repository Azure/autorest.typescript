// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { BytesClient } from "./bytesClient.js";
export {
  DefaultBytesProperty,
  Base64BytesProperty,
  Base64urlBytesProperty,
  Base64urlArrayBytesProperty,
} from "./models/index.js";
export {
  BytesClientOptions,
  QueryDefaultOptionalParams,
  QueryBase64OptionalParams,
  QueryBase64urlOptionalParams,
  QueryBase64urlArrayOptionalParams,
  PropertyDefaultOptionalParams,
  PropertyBase64OptionalParams,
  PropertyBase64urlOptionalParams,
  PropertyBase64urlArrayOptionalParams,
  HeaderDefaultOptionalParams,
  HeaderBase64OptionalParams,
  HeaderBase64urlOptionalParams,
  HeaderBase64urlArrayOptionalParams,
  RequestBodyDefaultOptionalParams,
  RequestBodyOctetStreamOptionalParams,
  RequestBodyCustomContentTypeOptionalParams,
  RequestBodyBase64OptionalParams,
  RequestBodyBase64urlOptionalParams,
  ResponseBodyDefaultOptionalParams,
  ResponseBodyOctetStreamOptionalParams,
  ResponseBodyCustomContentTypeOptionalParams,
  ResponseBodyBase64OptionalParams,
  ResponseBodyBase64urlOptionalParams,
} from "./api/index.js";
export {
  HeaderOperations,
  PropertyOperations,
  QueryOperations,
  RequestBodyOperations,
  ResponseBodyOperations,
} from "./classic/index.js";
