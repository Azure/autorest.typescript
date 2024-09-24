// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface Test1Request */
export interface Test1Request {
  a: string;
  b: string;
  c: string;
}

export function test1RequestSerializer(item: Test1Request): any {
  return { a: item["a"], b: item["b"], c: item["c"] };
}

export function test1RequestDeserializer(item: any): Test1Request {
  return {
    a: item["a"],
    b: item["b"],
    c: item["c"],
  };
}

/** model interface Test */
export interface Test {
  prop: string;
}

export function testSerializer(item: Test): any {
  return { prop: item["prop"] };
}

export function testDeserializer(item: any): Test {
  return {
    prop: item["prop"],
  };
}

/** model interface Test3Request */
export interface Test3Request {
  prop: string;
}

export function test3RequestSerializer(item: Test3Request): any {
  return { prop: item["prop"] };
}

export function test3RequestDeserializer(item: any): Test3Request {
  return {
    prop: item["prop"],
  };
}

/** model interface Test4Request */
export interface Test4Request {
  prop: string;
}

export function test4RequestSerializer(item: Test4Request): any {
  return { prop: item["prop"] };
}

export function test4RequestDeserializer(item: any): Test4Request {
  return {
    prop: item["prop"],
  };
}
