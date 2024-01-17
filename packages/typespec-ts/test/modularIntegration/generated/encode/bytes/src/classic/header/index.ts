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
  HeaderDefaultOptions,
  HeaderBase64Options,
  HeaderBase64urlOptions,
  HeaderBase64urlArrayOptions,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (value: Uint8Array, options?: HeaderDefaultOptions) => Promise<void>;
  base64: (value: Uint8Array, options?: HeaderBase64Options) => Promise<void>;
  base64url: (
    value: Uint8Array,
    options?: HeaderBase64urlOptions,
  ) => Promise<void>;
  base64urlArray: (
    value: Uint8Array[],
    options?: HeaderBase64urlArrayOptions,
  ) => Promise<void>;
}

export function getHeader(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: HeaderDefaultOptions) =>
      headerDefault(context, value, options),
    base64: (value: Uint8Array, options?: HeaderBase64Options) =>
      headerBase64(context, value, options),
    base64url: (value: Uint8Array, options?: HeaderBase64urlOptions) =>
      headerBase64url(context, value, options),
    base64urlArray: (
      value: Uint8Array[],
      options?: HeaderBase64urlArrayOptions,
    ) => headerBase64urlArray(context, value, options),
  };
}

export function getHeaderOperations(context: BytesContext): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
