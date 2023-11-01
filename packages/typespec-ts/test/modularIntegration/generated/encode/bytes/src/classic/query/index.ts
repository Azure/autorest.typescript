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
  QueryQueryDefaultOptions,
  QueryQueryBase64Options,
  QueryQueryBase64urlOptions,
  QueryQueryBase64urlArrayOptions,
} from "../../models/options.js";

export interface QueryOperations {
  queryDefault: (
    value: Uint8Array,
    options?: QueryQueryDefaultOptions
  ) => Promise<void>;
  queryBase64: (
    value: Uint8Array,
    options?: QueryQueryBase64Options
  ) => Promise<void>;
  queryBase64url: (
    value: Uint8Array,
    options?: QueryQueryBase64urlOptions
  ) => Promise<void>;
  queryBase64urlArray: (
    value: Uint8Array[],
    options?: QueryQueryBase64urlArrayOptions
  ) => Promise<void>;
}

export function getQuery(context: BytesContext) {
  return {
    queryDefault: (value: Uint8Array, options?: QueryQueryDefaultOptions) =>
      queryDefault(context, value, options),
    queryBase64: (value: Uint8Array, options?: QueryQueryBase64Options) =>
      queryBase64(context, value, options),
    queryBase64url: (value: Uint8Array, options?: QueryQueryBase64urlOptions) =>
      queryBase64url(context, value, options),
    queryBase64urlArray: (
      value: Uint8Array[],
      options?: QueryQueryBase64urlArrayOptions
    ) => queryBase64urlArray(context, value, options),
  };
}

export function getQueryOperations(context: BytesContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
