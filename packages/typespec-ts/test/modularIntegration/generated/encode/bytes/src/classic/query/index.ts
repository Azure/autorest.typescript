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
  DefaultOptions,
  Base64Options,
  Base64urlOptions,
  Base64urlArrayOptions,
} from "../../models/options.js";

export interface QueryOperations {
  default: (value: Uint8Array, options?: DefaultOptions) => Promise<void>;
  base64: (value: Uint8Array, options?: Base64Options) => Promise<void>;
  base64url: (value: Uint8Array, options?: Base64urlOptions) => Promise<void>;
  base64urlArray: (
    value: Uint8Array[],
    options?: Base64urlArrayOptions,
  ) => Promise<void>;
}

export function getQuery(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: DefaultOptions) =>
      queryDefault(context, value, options),
    base64: (value: Uint8Array, options?: Base64Options) =>
      queryBase64(context, value, options),
    base64url: (value: Uint8Array, options?: Base64urlOptions) =>
      queryBase64url(context, value, options),
    base64urlArray: (value: Uint8Array[], options?: Base64urlArrayOptions) =>
      queryBase64urlArray(context, value, options),
  };
}

export function getQueryOperations(context: BytesContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
