// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";
import {
  DefaultBytesProperty as DefaultBytesPropertyRest,
  Base64BytesProperty as Base64BytesPropertyRest,
  Base64urlBytesProperty as Base64urlBytesPropertyRest,
  Base64urlArrayBytesProperty as Base64urlArrayBytesPropertyRest,
} from "../rest/index.js";

export interface DefaultBytesProperty {
  value: Uint8Array;
}

export function defaultBytesPropertySerializer(
  item: DefaultBytesProperty,
): DefaultBytesPropertyRest {
  return {
    value: uint8ArrayToString(item["value"], "base64"),
  };
}

export interface Base64BytesProperty {
  value: Uint8Array;
}

export function base64BytesPropertySerializer(
  item: Base64BytesProperty,
): Base64BytesPropertyRest {
  return {
    value: uint8ArrayToString(item["value"], "base64"),
  };
}

export interface Base64urlBytesProperty {
  value: Uint8Array;
}

export function base64urlBytesPropertySerializer(
  item: Base64urlBytesProperty,
): Base64urlBytesPropertyRest {
  return {
    value: uint8ArrayToString(item["value"], "base64url"),
  };
}

export interface Base64urlArrayBytesProperty {
  value: Uint8Array[];
}

export function base64urlArrayBytesPropertySerializer(
  item: Base64urlArrayBytesProperty,
): Base64urlArrayBytesPropertyRest {
  return {
    value: item["value"].map((p) => uint8ArrayToString(p, "base64url")),
  };
}
