// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { CollectionsByteProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/collectionsByte/index.js";
import {
  CollectionsByteGetAllOptionalParams,
  CollectionsByteGetDefaultOptionalParams,
  CollectionsBytePutAllOptionalParams,
  CollectionsBytePutDefaultOptionalParams,
} from "../../models/options.js";

export interface CollectionsByteOperations {
  getAll: (
    options?: CollectionsByteGetAllOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  getDefault: (
    options?: CollectionsByteGetDefaultOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  putAll: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsByte(context: OptionalContext) {
  return {
    getAll: (options?: CollectionsByteGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: CollectionsByteGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getCollectionsByteOperations(
  context: OptionalContext,
): CollectionsByteOperations {
  return {
    ...getCollectionsByte(context),
  };
}
