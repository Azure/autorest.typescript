// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface _Test3Request */
export interface _Test3Request {
  prop: string;
}

export function _test3RequestSerializer(item: _Test3Request): any {
  return { prop: item["prop"] };
}

/** model interface _Test4Request */
export interface _Test4Request {
  prop: string;
}

export function _test4RequestSerializer(item: _Test4Request): any {
  return { prop: item["prop"] };
}
