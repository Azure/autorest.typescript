// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface AzureEmbeddingModel {
  embedding: number[];
}

export function azureEmbeddingModelSerializer(
  item: AzureEmbeddingModel,
): Record<string, unknown> {
  return {
    embedding: item["embedding"],
  };
}

/** The version of the API. */
export type Versions = "2022-12-01-preview";
