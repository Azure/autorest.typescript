// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is a simple model. */
export interface User {
  name: string;
}

export function userSerializer(item: User): Record<string, unknown> {
  return {
    name: item["name"],
  };
}
