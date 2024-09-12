// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface Test1Request {
  a: string;
  b: string;
  c: string;
}

export interface Test2Request {
  prop: string;
}

export interface Test3Request {
  prop: string;
}

export function test3RequestSerializer(item: Test3Request): any {
  return { prop: item["prop"] };
}

export interface Test4Request {
  prop: string;
}

export function test4RequestSerializer(item: Test4Request): any {
  return { prop: item["prop"] };
}
