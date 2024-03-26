// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  Base64urlArrayBytesProperty,
  Base64urlBytesProperty,
  Base64BytesProperty,
  DefaultBytesProperty,
} from "../models/models.js";
import {
  Base64urlArrayBytesProperty as RestBase64urlArrayBytesProperty,
  Base64urlBytesProperty as RestBase64urlBytesProperty,
  Base64BytesProperty as RestBase64BytesProperty,
  DefaultBytesProperty as RestDefaultBytesProperty,
} from "../rest/index.js";

export function serializeBase64urlArrayBytesProperty(
  o: Base64urlArrayBytesProperty,
): RestBase64urlArrayBytesProperty {
  return {
    value: o["value"].map((e: undefined) => uint8ArrayToString(e, "base64url")),
  };
}

export function deserializeBase64urlArrayBytesProperty(
  o: RestBase64urlArrayBytesProperty,
): Base64urlArrayBytesProperty {
  return {
    value: o["value"].map((e: undefined) =>
      typeof e === "string" ? stringToUint8Array(e, "base64url") : e,
    ),
  };
}

export function serializeBase64urlBytesProperty(
  o: Base64urlBytesProperty,
): RestBase64urlBytesProperty {
  return {
    value: uint8ArrayToString(o["value"], "base64url"),
  };
}

export function deserializeBase64urlBytesProperty(
  o: RestBase64urlBytesProperty,
): Base64urlBytesProperty {
  return {
    value:
      typeof o["value"] === "string"
        ? stringToUint8Array(o["value"], "base64url")
        : o["value"],
  };
}

export function serializeBase64BytesProperty(
  o: Base64BytesProperty,
): RestBase64BytesProperty {
  return {
    value: uint8ArrayToString(o["value"], "base64"),
  };
}

export function deserializeBase64BytesProperty(
  o: RestBase64BytesProperty,
): Base64BytesProperty {
  return {
    value:
      typeof o["value"] === "string"
        ? stringToUint8Array(o["value"], "base64")
        : o["value"],
  };
}

export function serializeDefaultBytesProperty(
  o: DefaultBytesProperty,
): RestDefaultBytesProperty {
  return {
    value: uint8ArrayToString(o["value"], "base64"),
  };
}

export function deserializeDefaultBytesProperty(
  o: RestDefaultBytesProperty,
): DefaultBytesProperty {
  return {
    value:
      typeof o["value"] === "string"
        ? stringToUint8Array(o["value"], "base64")
        : o["value"],
  };
}
