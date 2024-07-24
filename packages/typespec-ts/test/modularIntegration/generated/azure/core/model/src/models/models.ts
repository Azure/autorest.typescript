// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureEmbeddingModel as AzureEmbeddingModelRest } from "../rest/index.js";

export interface AzureEmbeddingModel {
  embedding: number[];
}

export function azureEmbeddingModelSerializer(
  item: AzureEmbeddingModel,
): AzureEmbeddingModelRest {
  return {
    embedding: item["embedding"],
  };
}

/** The version of the API. */
export type Versions = "2022-12-01-preview";
