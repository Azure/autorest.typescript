// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface A */
export interface A {
  prop1: string;
}

export function aSerializer(item: A): any {
  return { prop1: item["prop1"] };
}
