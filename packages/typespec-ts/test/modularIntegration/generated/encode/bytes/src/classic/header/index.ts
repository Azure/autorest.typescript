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
  headerDefault: (
    value: Uint8Array,
    options?: HeaderHeaderDefaultOptions
  ) => Promise<void>;
  headerBase64: (
    value: Uint8Array,
    options?: HeaderHeaderBase64Options
  ) => Promise<void>;
  headerBase64url: (
    value: Uint8Array,
    options?: HeaderHeaderBase64urlOptions
  ) => Promise<void>;
  headerBase64urlArray: (
    value: Uint8Array[],
    options?: HeaderHeaderBase64urlArrayOptions
  ) => Promise<void>;
}

export function getHeader(context: BytesContext) {
  return {
    headerDefault: (value: Uint8Array, options?: HeaderHeaderDefaultOptions) =>
      headerDefault(context, value, options),
    headerBase64: (value: Uint8Array, options?: HeaderHeaderBase64Options) =>
      headerBase64(context, value, options),
    headerBase64url: (
      value: Uint8Array,
      options?: HeaderHeaderBase64urlOptions
    ) => headerBase64url(context, value, options),
    headerBase64urlArray: (
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
