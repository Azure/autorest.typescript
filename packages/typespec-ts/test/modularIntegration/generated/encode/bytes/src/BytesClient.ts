// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  DefaultBytesProperty,
  Base64BytesProperty,
  Base64urlBytesProperty,
  Base64urlArrayBytesProperty,
} from "./models/models.js";
import {
  QueryDefaultOptions,
  QueryBase64Options,
  QueryBase64urlOptions,
  QueryBase64urlArrayOptions,
  PropertyDefaultOptions,
  PropertyBase64Options,
  PropertyBase64urlOptions,
  PropertyBase64urlArrayOptions,
  HeaderDefaultOptions,
  HeaderBase64Options,
  HeaderBase64urlOptions,
  HeaderBase64urlArrayOptions,
  RequestBodyDefaultOptions,
  RequestBodyOctetStreamOptions,
  RequestBodyCustomContentTypeOptions,
  RequestBodyBase64Options,
  RequestBodyBase64urlOptions,
  ResponseBodyDefaultOptions,
  ResponseBodyOctetStreamOptions,
  ResponseBodyCustomContentTypeOptions,
  ResponseBodyBase64Options,
  ResponseBodyBase64urlOptions,
} from "./models/options.js";
import {
  createBytes,
  BytesClientOptions,
  BytesContext,
  headerDefault,
  headerBase64,
  headerBase64url,
  headerBase64urlArray,
  propertyDefault,
  propertyBase64,
  propertyBase64url,
  propertyBase64urlArray,
  queryDefault,
  queryBase64,
  queryBase64url,
  queryBase64urlArray,
  requestBodyDefault,
  requestBodyOctetStream,
  requestBodyCustomContentType,
  requestBodyBase64,
  requestBodyBase64url,
  responseBodyDefault,
  responseBodyOctetStream,
  responseBodyCustomContentType,
  responseBodyBase64,
  responseBodyBase64url,
} from "./api/index.js";

export { BytesClientOptions } from "./api/BytesContext.js";

export class BytesClient {
  private _client: BytesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for encode decorator on bytes. */
  constructor(options: BytesClientOptions = {}) {
    this._client = createBytes(options);
    this.pipeline = this._client.pipeline;
  }

  query = {
    default: (
      value: Uint8Array,
      options?: QueryDefaultOptions
    ): Promise<void> => {
      return queryDefault(this._client, value, options);
    },
    base64: (
      value: Uint8Array,
      options?: QueryBase64Options
    ): Promise<void> => {
      return queryBase64(this._client, value, options);
    },
    base64url: (
      value: Uint8Array,
      options?: QueryBase64urlOptions
    ): Promise<void> => {
      return queryBase64url(this._client, value, options);
    },
    base64urlArray: (
      value: Uint8Array[],
      options?: QueryBase64urlArrayOptions
    ): Promise<void> => {
      return queryBase64urlArray(this._client, value, options);
    },
  };
  property = {
    default: (
      body: DefaultBytesProperty,
      options?: PropertyDefaultOptions
    ): Promise<DefaultBytesProperty> => {
      return propertyDefault(this._client, body, options);
    },
    base64: (
      body: Base64BytesProperty,
      options?: PropertyBase64Options
    ): Promise<Base64BytesProperty> => {
      return propertyBase64(this._client, body, options);
    },
    base64url: (
      body: Base64urlBytesProperty,
      options?: PropertyBase64urlOptions
    ): Promise<Base64urlBytesProperty> => {
      return propertyBase64url(this._client, body, options);
    },
    base64urlArray: (
      body: Base64urlArrayBytesProperty,
      options?: PropertyBase64urlArrayOptions
    ): Promise<Base64urlArrayBytesProperty> => {
      return propertyBase64urlArray(this._client, body, options);
    },
  };
  header = {
    default: (
      value: Uint8Array,
      options?: HeaderDefaultOptions
    ): Promise<void> => {
      return headerDefault(this._client, value, options);
    },
    base64: (
      value: Uint8Array,
      options?: HeaderBase64Options
    ): Promise<void> => {
      return headerBase64(this._client, value, options);
    },
    base64url: (
      value: Uint8Array,
      options?: HeaderBase64urlOptions
    ): Promise<void> => {
      return headerBase64url(this._client, value, options);
    },
    base64urlArray: (
      value: Uint8Array[],
      options?: HeaderBase64urlArrayOptions
    ): Promise<void> => {
      return headerBase64urlArray(this._client, value, options);
    },
  };
  requestBody = {
    default: (
      value: Uint8Array,
      options?: RequestBodyDefaultOptions
    ): Promise<void> => {
      return requestBodyDefault(this._client, value, options);
    },
    octetStream: (
      value: Uint8Array,
      options?: RequestBodyOctetStreamOptions
    ): Promise<void> => {
      return requestBodyOctetStream(this._client, value, options);
    },
    customContentType: (
      value: Uint8Array,
      options?: RequestBodyCustomContentTypeOptions
    ): Promise<void> => {
      return requestBodyCustomContentType(this._client, value, options);
    },
    base64: (
      value: Uint8Array,
      options?: RequestBodyBase64Options
    ): Promise<void> => {
      return requestBodyBase64(this._client, value, options);
    },
    base64url: (
      value: Uint8Array,
      options?: RequestBodyBase64urlOptions
    ): Promise<void> => {
      return requestBodyBase64url(this._client, value, options);
    },
  };
  responseBody = {
    default: (options?: ResponseBodyDefaultOptions): Promise<Uint8Array> => {
      return responseBodyDefault(this._client, options);
    },
    octetStream: (
      options?: ResponseBodyOctetStreamOptions
    ): Promise<Uint8Array> => {
      return responseBodyOctetStream(this._client, options);
    },
    customContentType: (
      options?: ResponseBodyCustomContentTypeOptions
    ): Promise<Uint8Array> => {
      return responseBodyCustomContentType(this._client, options);
    },
    base64: (options?: ResponseBodyBase64Options): Promise<Uint8Array> => {
      return responseBodyBase64(this._client, options);
    },
    base64url: (
      options?: ResponseBodyBase64urlOptions
    ): Promise<Uint8Array> => {
      return responseBodyBase64url(this._client, options);
    },
  };
}
