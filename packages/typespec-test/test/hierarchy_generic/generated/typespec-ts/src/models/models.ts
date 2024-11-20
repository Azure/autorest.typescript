// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface A */
export interface A {
  prop1: string;
}

export function aSerializer(item: A): any {
  return { prop1: item["prop1"] };
}

/** model interface BA */
export interface BA {
  prop2: string;
}

export function baSerializer(item: BA): any {
  return { prop2: item["prop2"] };
}

/** model interface BEA */
export interface BEA {
  prop3: string;
}

export function beaSerializer(item: BEA): any {
  return { prop3: item["prop3"] };
}
