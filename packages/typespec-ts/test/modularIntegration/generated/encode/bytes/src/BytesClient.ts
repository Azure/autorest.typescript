// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
} from "./api/index.js";

export { BytesClientOptions } from "./api/BytesContext.js";

export class BytesClient {
  private _client: BytesContext;

  /** Test for encode decorator on bytes. */
  constructor(options: BytesClientOptions = {}) {
    this._client = createBytes(options);
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
}
