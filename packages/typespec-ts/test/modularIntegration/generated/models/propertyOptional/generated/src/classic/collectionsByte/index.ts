// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { CollectionsByteProperty } from "../../models/models.js";
import {
  collectionsByteGetAll,
  collectionsByteGetDefault,
  collectionsBytePutAll,
  collectionsBytePutDefault,
} from "../../api/collectionsByte/index.js";
import {
  CollectionsByteGetAllOptions,
  CollectionsByteGetDefaultOptions,
  CollectionsBytePutAllOptions,
  CollectionsBytePutDefaultOptions,
} from "../../models/options.js";

export interface CollectionsByteOperations {
  getAll: (
    options?: CollectionsByteGetAllOptions,
  ) => Promise<CollectionsByteProperty>;
  getDefault: (
    options?: CollectionsByteGetDefaultOptions,
  ) => Promise<CollectionsByteProperty>;
  putAll: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePutDefaultOptions,
  ) => Promise<void>;
}

export function getCollectionsByte(context: OptionalContext) {
  return {
    getAll: (options?: CollectionsByteGetAllOptions) =>
      collectionsByteGetAll(context, options),
    getDefault: (options?: CollectionsByteGetDefaultOptions) =>
      collectionsByteGetDefault(context, options),
    putAll: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePutAllOptions,
    ) => collectionsBytePutAll(context, body, options),
    putDefault: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePutDefaultOptions,
    ) => collectionsBytePutDefault(context, body, options),
  };
}

export function getCollectionsByteOperations(
  context: OptionalContext,
): CollectionsByteOperations {
  return {
    ...getCollectionsByte(context),
  };
}
