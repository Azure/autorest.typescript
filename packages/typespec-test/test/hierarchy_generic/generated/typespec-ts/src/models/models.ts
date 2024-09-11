// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface A {
  prop1: string;
}

export function aSerializer(item: A): any {
  return { prop1: item["prop1"] };
}

export function aDeserializer(item: any): A {
  return {
    prop1: item["prop1"],
  };
}

export interface BA {
  prop2: string;
}

export function bASerializer(item: BA): any {
  return { prop2: item["prop2"] };
}

export function bADeserializer(item: any): BA {
  return {
    prop2: item["prop2"],
  };
}

export interface BEA {
  prop3: string;
}

export function bEASerializer(item: BEA): any {
  return { prop3: item["prop3"] };
}

export function bEADeserializer(item: any): BEA {
  return {
    prop3: item["prop3"],
  };
}
