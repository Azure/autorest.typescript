// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface FooBA */
export interface FooBA {
  prop2: string;
}

export function fooBASerializer(item: FooBA): any {
  return { prop2: item["prop2"] };
}
