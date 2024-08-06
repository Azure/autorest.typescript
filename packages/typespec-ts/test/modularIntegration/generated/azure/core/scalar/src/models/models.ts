// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface AzureLocationModel {
  location: string;
}

export function azureLocationModelSerializer(
  item: AzureLocationModel,
): Record<string, unknown> {
  return {
    location: item["location"],
  };
}

/** The version of the API. */
export type Versions = "2022-12-01-preview";
