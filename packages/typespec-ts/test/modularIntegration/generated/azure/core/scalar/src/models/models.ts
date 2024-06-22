// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLocationModel as AzureLocationModelRest } from "../rest/index.js";

export interface AzureLocationModel {
  location: string;
}

export function azureLocationModelSerializer(
  item: AzureLocationModel,
): AzureLocationModelRest {
  return {
    location: item["location"],
  };
}

/** The version of the API. */
/** */
export type Versions = "2022-12-01-preview";
