// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface FooA */
export interface FooA {
  prop1: string;
}

export function fooASerializer(item: FooA): any {
  return { prop1: item["prop1"] };
}
