// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface Ba */
export interface Ba {
  prop2: string;
}

export function baSerializer(item: Ba): any {
  return { prop2: item["prop2"] };
}
