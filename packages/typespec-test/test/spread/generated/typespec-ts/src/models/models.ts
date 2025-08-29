// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/* eslint-disable @typescript-eslint/naming-convention */
/** model interface _Test3Request */
export interface _Test3Request {
  prop: string;
}
/* eslint-enable @typescript-eslint/naming-convention */
export function _test3RequestSerializer(item: _Test3Request): any {
  return { prop: item["prop"] };
}

/* eslint-disable @typescript-eslint/naming-convention */
/** model interface _Test4Request */
export interface _Test4Request {
  prop: string;
}
/* eslint-enable @typescript-eslint/naming-convention */
export function _test4RequestSerializer(item: _Test4Request): any {
  return { prop: item["prop"] };
}
