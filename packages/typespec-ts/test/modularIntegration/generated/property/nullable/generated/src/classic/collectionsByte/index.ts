// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/NullableContext.js";
import { CollectionsByteProperty } from "../../models/models.js";
import {
  collectionsByteGetNonNull,
  collectionsByteGetNull,
  collectionsBytePatchNonNull,
  collectionsBytePatchNull,
} from "../../api/collectionsByte/index.js";
import {
  CollectionsByteGetNonNullOptions,
  CollectionsByteGetNullOptions,
  CollectionsBytePatchNonNullOptions,
  CollectionsBytePatchNullOptions,
} from "../../models/options.js";

export interface CollectionsByteOperations {
  getNonNull: (
    options?: CollectionsByteGetNonNullOptions,
  ) => Promise<CollectionsByteProperty>;
  getNull: (
    options?: CollectionsByteGetNullOptions,
  ) => Promise<CollectionsByteProperty>;
  patchNonNull: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePatchNonNullOptions,
  ) => Promise<void>;
  patchNull: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePatchNullOptions,
  ) => Promise<void>;
}

export function getCollectionsByte(context: NullableContext) {
  return {
    getNonNull: (options?: CollectionsByteGetNonNullOptions) =>
      collectionsByteGetNonNull(context, options),
    getNull: (options?: CollectionsByteGetNullOptions) =>
      collectionsByteGetNull(context, options),
    patchNonNull: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePatchNonNullOptions,
    ) => collectionsBytePatchNonNull(context, body, options),
    patchNull: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePatchNullOptions,
    ) => collectionsBytePatchNull(context, body, options),
  };
}

export function getCollectionsByteOperations(
  context: NullableContext,
): CollectionsByteOperations {
  return {
    ...getCollectionsByte(context),
  };
}
