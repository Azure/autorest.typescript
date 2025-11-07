// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface A */
export interface A {
  prop1: string;
}

export function aSerializer(item: A): any {
  return { prop1: item["prop1"] };
}
