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
  HeaderHeaderDefaultOptions,
  HeaderHeaderBase64Options,
  HeaderHeaderBase64urlOptions,
  HeaderHeaderBase64urlArrayOptions,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (
    value: Uint8Array,
    options?: HeaderHeaderDefaultOptions
  ) => Promise<void>;
  base64: (
    value: Uint8Array,
    options?: HeaderHeaderBase64Options
  ) => Promise<void>;
  base64url: (
    value: Uint8Array,
    options?: HeaderHeaderBase64urlOptions
  ) => Promise<void>;
  base64urlArray: (
    value: Uint8Array[],
    options?: HeaderHeaderBase64urlArrayOptions
  ) => Promise<void>;
}

export function getHeader(context: BytesContext) {
  return {
    default: (value: Uint8Array, options?: HeaderHeaderDefaultOptions) =>
      headerDefault(context, value, options),
    base64: (value: Uint8Array, options?: HeaderHeaderBase64Options) =>
      headerBase64(context, value, options),
    base64url: (value: Uint8Array, options?: HeaderHeaderBase64urlOptions) =>
      headerBase64url(context, value, options),
    base64urlArray: (
      value: Uint8Array[],
      options?: HeaderHeaderBase64urlArrayOptions
    ) => headerBase64urlArray(context, value, options),
  };
}

export function getHeaderOperations(context: BytesContext): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
