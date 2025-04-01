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

/** Alias for _ParametrizedHostEndpoint */
export type _ParametrizedHostEndpoint = string | string;

export function collectionArrayDeserializer(result: Array<Collection>): any[] {
  return result.map((item) => {
    return collectionDeserializer(item);
  });
}
