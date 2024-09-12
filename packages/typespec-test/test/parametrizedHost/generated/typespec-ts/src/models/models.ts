// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorModel } from "@azure-rest/core-client";

/** Identifier for collections. */
export interface Collection {
  readonly collectionId: string;
}

export function collectionDeserializer(item: any): Collection {
  return {
    collectionId: item["collectionId"],
  };
}

export function collectionArrayDeserializer(result: Array<Collection>): any[] {
  return result.map((item) => {
    collectionDeserializer(item);
  });
}

/** A response containing error details. */
export interface ErrorResponse {
  /** The error object. */
  error: ErrorModel;
}
