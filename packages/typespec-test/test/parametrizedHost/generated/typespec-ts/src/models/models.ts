// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Identifier for collections. */
export interface Collection {
  readonly collectionId: string;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function collectionDeserializer(item: any): Collection {
  return {
    collectionId: item["collectionId"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
export function collectionArrayDeserializer(result: Array<Collection>): any[] {
  return result.map((item) => {
    return collectionDeserializer(item);
  });
}
