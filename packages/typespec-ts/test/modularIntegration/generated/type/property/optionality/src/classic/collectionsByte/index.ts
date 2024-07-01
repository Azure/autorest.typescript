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

/** Interface representing a CollectionsByte operations. */
export interface CollectionsByteOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: CollectionsByteGetAllOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: CollectionsByteGetDefaultOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
