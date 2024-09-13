// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface A */
export interface A {
  prop1: string;
}

export function aSerializer(item: A): any {
  return { prop1: item["prop1"] };
}

/** model interface Ba */
export interface Ba {
  prop2: string;
}

export function baSerializer(item: Ba): any {
  return { prop2: item["prop2"] };
}

/** model interface Bea */
export interface Bea {
  prop3: string;
}

export function beaSerializer(item: Bea): any {
  return { prop3: item["prop3"] };
}
