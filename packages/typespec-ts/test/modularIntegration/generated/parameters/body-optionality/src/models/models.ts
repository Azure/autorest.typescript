// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface BodyModel {
  name: string;
}

export function bodyModelSerializer(item: BodyModel): Record<string, unknown> {
  return {
    name: item["name"],
  };
}
