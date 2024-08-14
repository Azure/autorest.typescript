// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface A0 {
  prop1: string;
}

export function a0Serializer(item: A0): Record<string, unknown> {
  return {
    prop1: item["prop1"],
  };
}

export interface A1 {
  prop2: string;
}

export function a1Serializer(item: A1): Record<string, unknown> {
  return {
    prop2: item["prop2"],
  };
}

export interface A2 {
  prop3: string;
}

export function a2Serializer(item: A2): Record<string, unknown> {
  return {
    prop3: item["prop3"],
  };
}
