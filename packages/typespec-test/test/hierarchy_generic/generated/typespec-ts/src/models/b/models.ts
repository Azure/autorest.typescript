// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface BA */
export interface BA {
  prop2: string;
}

export function baSerializer(item: BA): any {
  return { prop2: item["prop2"] };
}
