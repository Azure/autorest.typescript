// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Identifier for collections. */
export interface Collection {
  readonly collectionId: string;
}

export function collectionSerializer(item: Collection): any {
  return item as any;
}

export function collectionDeserializer(item: any): Collection {
  return {
    collectionId: item["collectionId"],
  };
}

export function collectionArraySerializer(result: Array<Collection>): any[] {
  return result.map((item) => {
    collectionSerializer(item);
  });
}

export function collectionArrayDeserializer(result: Array<Collection>): any[] {
  return result.map((item) => {
    collectionDeserializer(item);
  });
}
