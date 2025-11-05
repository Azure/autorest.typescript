// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface BA */
export interface BA {
  prop2: string;
}

export function baSerializer(item: BA): any {
  return { prop2: item["prop2"] };
}
