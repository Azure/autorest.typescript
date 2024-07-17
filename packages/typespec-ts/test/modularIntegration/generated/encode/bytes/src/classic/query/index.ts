// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesContext } from "../../api/bytesContext.js";
import {
  queryDefault,
  queryBase64,
  queryBase64url,
  queryBase64urlArray,
} from "../../api/query/index.js";
import {
  QueryDefaultOptionalParams,
  QueryBase64OptionalParams,
  QueryBase64urlOptionalParams,
  QueryBase64urlArrayOptionalParams,
} from "../../api/options.js";

/** Interface representing a Query operations. */
export interface QueryOperations {
  default: (
    value: Uint8Array,
    options?: QueryDefaultOptionalParams,
  ) => Promise<void>;
  base64: (
    value: Uint8Array,
    options?: QueryBase64OptionalParams,
  ) => Promise<void>;
  base64url: (
    value: Uint8Array,
    options?: QueryBase64urlOptionalParams,
  ) => Promise<void>;
  base64urlArray: (
    value: Uint8Array[],
    options?: QueryBase64urlArrayOptionalParams,
  ) => Promise<void>;
}

export function getQuery(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: QueryDefaultOptionalParams) =>
      queryDefault(context, value, options),
    base64: (value: Uint8Array, options?: QueryBase64OptionalParams) =>
      queryBase64(context, value, options),
    base64url: (value: Uint8Array, options?: QueryBase64urlOptionalParams) =>
      queryBase64url(context, value, options),
    base64urlArray: (
      value: Uint8Array[],
      options?: QueryBase64urlArrayOptionalParams,
    ) => queryBase64urlArray(context, value, options),
  };
}

export function getQueryOperations(context: BytesContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
