// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesContext } from "../../api/BytesContext.js";
import {
  headerDefault,
  headerBase64,
  headerBase64url,
  headerBase64urlArray,
} from "../../api/header/index.js";
import {
  HeaderDefaultOptionalParams,
  HeaderBase64OptionalParams,
  HeaderBase64urlOptionalParams,
  HeaderBase64urlArrayOptionalParams,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (
    value: Uint8Array,
    options?: HeaderDefaultOptionalParams,
  ) => Promise<void>;
  base64: (
    value: Uint8Array,
    options?: HeaderBase64OptionalParams,
  ) => Promise<void>;
  base64url: (
    value: Uint8Array,
    options?: HeaderBase64urlOptionalParams,
  ) => Promise<void>;
  base64urlArray: (
    value: Uint8Array[],
    options?: HeaderBase64urlArrayOptionalParams,
  ) => Promise<void>;
}

export function getHeader(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: HeaderDefaultOptionalParams) =>
      headerDefault(context, value, options),
    base64: (value: Uint8Array, options?: HeaderBase64OptionalParams) =>
      headerBase64(context, value, options),
    base64url: (value: Uint8Array, options?: HeaderBase64urlOptionalParams) =>
      headerBase64url(context, value, options),
    base64urlArray: (
      value: Uint8Array[],
      options?: HeaderBase64urlArrayOptionalParams,
    ) => headerBase64urlArray(context, value, options),
  };
}

export function getHeaderOperations(context: BytesContext): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
