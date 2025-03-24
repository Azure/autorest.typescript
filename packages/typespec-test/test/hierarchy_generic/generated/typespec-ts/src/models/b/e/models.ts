// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface BEA */
export interface BEA {
  prop3: string;
}

export function beaSerializer(item: BEA): any {
  return { prop3: item["prop3"] };
}
