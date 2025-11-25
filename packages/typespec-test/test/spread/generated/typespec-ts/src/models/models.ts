// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
