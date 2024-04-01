// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesContext } from "../../api/BytesContext.js";
import {
  queryDefault,
  queryBase64,
  queryBase64url,
  queryBase64urlArray,
} from "../../api/query/index.js";
import {
  QueryDefaultOptions,
  QueryBase64Options,
  QueryBase64urlOptions,
  QueryBase64urlArrayOptions,
} from "../../models/options.js";

export interface QueryOperations {
  default: (value: Uint8Array, options?: QueryDefaultOptions) => Promise<void>;
  base64: (value: Uint8Array, options?: QueryBase64Options) => Promise<void>;
  base64url: (
    value: Uint8Array,
    options?: QueryBase64urlOptions,
  ) => Promise<void>;
  base64urlArray: (
    value: Uint8Array[],
    options?: QueryBase64urlArrayOptions,
  ) => Promise<void>;
}

export function getQuery(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: QueryDefaultOptions) =>
      queryDefault(context, value, options),
    base64: (value: Uint8Array, options?: QueryBase64Options) =>
      queryBase64(context, value, options),
    base64url: (value: Uint8Array, options?: QueryBase64urlOptions) =>
      queryBase64url(context, value, options),
    base64urlArray: (
      value: Uint8Array[],
      options?: QueryBase64urlArrayOptions,
    ) => queryBase64urlArray(context, value, options),
  };
}

export function getQueryOperations(context: BytesContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
