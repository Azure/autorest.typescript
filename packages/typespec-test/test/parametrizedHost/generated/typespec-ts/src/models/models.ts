// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
    return collectionDeserializer(item);
  });
}
