// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface FooBEA */
export interface FooBEA {
  prop3: string;
}

export function fooBEASerializer(item: FooBEA): any {
  return { prop3: item["prop3"] };
}
