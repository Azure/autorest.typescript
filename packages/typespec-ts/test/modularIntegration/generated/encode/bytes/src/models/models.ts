// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";

export interface DefaultBytesProperty {
  value: Uint8Array;
}

export function defaultBytesPropertySerializer(
  item: DefaultBytesProperty,
): Record<string, unknown> {
  return {
    value: uint8ArrayToString(item["value"], "base64"),
  };
}

export interface Base64BytesProperty {
  value: Uint8Array;
}

export function base64BytesPropertySerializer(
  item: Base64BytesProperty,
): Record<string, unknown> {
  return {
    value: uint8ArrayToString(item["value"], "base64"),
  };
}

export interface Base64urlBytesProperty {
  value: Uint8Array;
}

export function base64urlBytesPropertySerializer(
  item: Base64urlBytesProperty,
): Record<string, unknown> {
  return {
    value: uint8ArrayToString(item["value"], "base64url"),
  };
}

export interface Base64urlArrayBytesProperty {
  value: Uint8Array[];
}

export function base64urlArrayBytesPropertySerializer(
  item: Base64urlArrayBytesProperty,
): Record<string, unknown> {
  return {
    value: item["value"].map((p) => uint8ArrayToString(p, "base64url")),
  };
}
