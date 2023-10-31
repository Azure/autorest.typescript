// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BytesContext } from "../../api/BytesContext.js";
import {
  DefaultBytesProperty,
  Base64BytesProperty,
  Base64urlBytesProperty,
  Base64urlArrayBytesProperty,
} from "../../models/models.js";
import {
  propertyDefault,
  propertyBase64,
  propertyBase64url,
  propertyBase64urlArray,
} from "../../api/property/index.js";
import {
  PropertyPropertyDefaultOptions,
  PropertyPropertyBase64Options,
  PropertyPropertyBase64urlOptions,
  PropertyPropertyBase64urlArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  default: (
    body: DefaultBytesProperty,
    options?: PropertyPropertyDefaultOptions
  ) => Promise<DefaultBytesProperty>;
  base64: (
    body: Base64BytesProperty,
    options?: PropertyPropertyBase64Options
  ) => Promise<Base64BytesProperty>;
  base64url: (
    body: Base64urlBytesProperty,
    options?: PropertyPropertyBase64urlOptions
  ) => Promise<Base64urlBytesProperty>;
  base64urlArray: (
    body: Base64urlArrayBytesProperty,
    options?: PropertyPropertyBase64urlArrayOptions
  ) => Promise<Base64urlArrayBytesProperty>;
}

export function getProperty(context: BytesContext) {
  return {
    default: (
      body: DefaultBytesProperty,
      options?: PropertyPropertyDefaultOptions
    ) => propertyDefault(context, body, options),
    base64: (
      body: Base64BytesProperty,
      options?: PropertyPropertyBase64Options
    ) => propertyBase64(context, body, options),
    base64url: (
      body: Base64urlBytesProperty,
      options?: PropertyPropertyBase64urlOptions
    ) => propertyBase64url(context, body, options),
    base64urlArray: (
      body: Base64urlArrayBytesProperty,
      options?: PropertyPropertyBase64urlArrayOptions
    ) => propertyBase64urlArray(context, body, options),
  };
}

export function getPropertyOperations(
  context: BytesContext
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
