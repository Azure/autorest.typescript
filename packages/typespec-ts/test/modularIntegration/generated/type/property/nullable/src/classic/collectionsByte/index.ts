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
} from "../../models/options.js";

export interface CollectionsByteOperations {
  getNonNull: (
    options?: CollectionsByteGetNonNullOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  getNull: (
    options?: CollectionsByteGetNullOptionalParams,
  ) => Promise<CollectionsByteProperty>;
  patchNonNull: (
    body: CollectionsByteProperty,
    options?: CollectionsBytePatchNonNullOptionalParams,
  ) => Promise<void>;
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
