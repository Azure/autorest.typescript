// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLocationModel } from "../models/models.js";
import { AzureLocationModel as RestAzureLocationModel } from "../rest/index.js";

export function serializeAzureLocationModel(
  o: AzureLocationModel,
): RestAzureLocationModel {
  return {
    location: o["location"],
  };
}

export function deserializeAzureLocationModel(
  o: RestAzureLocationModel,
): AzureLocationModel {
  return {
    location: o["location"],
  };
}
