// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface BEA */
export interface BEA {
  prop3: string;
}

export function beaSerializer(item: BEA): any {
  return { prop3: item["prop3"] };
}
