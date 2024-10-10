// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface Test3Request */
export interface Test3Request {
  prop: string;
}

export function test3RequestSerializer(item: Test3Request): any {
  return { prop: item["prop"] };
}

/** model interface Test4Request */
export interface Test4Request {
  prop: string;
}

export function test4RequestSerializer(item: Test4Request): any {
  return { prop: item["prop"] };
}
