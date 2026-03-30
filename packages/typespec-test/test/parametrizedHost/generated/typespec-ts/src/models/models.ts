// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Identifier for collections. */
export interface Collection {
  readonly collectionId: string;
}

export function collectionDeserializer(item: any): Collection {
  return {
    collectionId: item["collectionId"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** v1 */
  V1 = "v1",
}

export function collectionArrayDeserializer(result: Array<Collection>): any[] {
  return result.map((item) => {
    return collectionDeserializer(item);
  });
}
