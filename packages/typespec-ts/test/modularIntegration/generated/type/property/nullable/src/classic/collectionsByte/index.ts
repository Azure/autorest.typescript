// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/nullableContext.js";
import { CollectionsByteProperty } from "../../models/models.js";
import {
  getNonNull,
  getNull,
  patchNonNull,
  patchNull,
} from "../../api/collectionsByte/index.js";
import {
  CollectionsByteGetNonNullOptionalParams,
  CollectionsByteGetNullOptionalParams,
  CollectionsBytePatchNonNullOptionalParams,
  CollectionsBytePatchNullOptionalParams,
} from "../../api/options.js";

/** Interface representing a CollectionsByte operations. */
export interface CollectionsByteOperations {
  /** Get models that will return all properties in the model */
  getNonNull: (
    options?: CollectionsByteGetNonNullOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  /** Get models that will return the default object */
  getNull: (
    options?: CollectionsByteGetNullOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  /** Put a body with all properties present. */
  patchNonNull: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePatchNonNullOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  patchNull: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePatchNullOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsByte(context: NullableContext) {
  return {
    getNonNull: (options?: CollectionsByteGetNonNullOptionalParams) =>
      getNonNull(context, options),
    getNull: (options?: CollectionsByteGetNullOptionalParams) =>
      getNull(context, options),
    patchNonNull: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePatchNonNullOptionalParams,
    ) => patchNonNull(context, body, options),
    patchNull: (
      body: CollectionsByteProperty,
      options?: CollectionsBytePatchNullOptionalParams,
    ) => patchNull(context, body, options),
  };
}

export function getCollectionsByteOperations(
  context: NullableContext,
): CollectionsByteOperations {
  return {
    ...getCollectionsByte(context),
  };
}
