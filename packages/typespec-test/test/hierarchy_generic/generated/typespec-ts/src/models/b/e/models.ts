// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface Bea */
export interface Bea {
  prop3: string;
}

export function beaSerializer(item: Bea): any {
  return { prop3: item["prop3"] };
}
