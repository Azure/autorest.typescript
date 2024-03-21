// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/NullableContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  collectionsModelGetNonNull,
  collectionsModelGetNull,
  collectionsModelPatchNonNull,
  collectionsModelPatchNull,
} from "../../api/collectionsModel/index.js";
import {
  CollectionsModelGetNonNullOptions,
  CollectionsModelGetNullOptions,
  CollectionsModelPatchNonNullOptions,
  CollectionsModelPatchNullOptions,
} from "../../models/options.js";

export interface CollectionsModelOperations {
  getNonNull: (
    options?: CollectionsModelGetNonNullOptions,
  ) => Promise<CollectionsModelProperty>;
  getNull: (
    options?: CollectionsModelGetNullOptions,
  ) => Promise<CollectionsModelProperty>;
  patchNonNull: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPatchNonNullOptions,
  ) => Promise<void>;
  patchNull: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPatchNullOptions,
  ) => Promise<void>;
}

export function getCollectionsModel(context: NullableContext) {
  return {
    getNonNull: (options?: CollectionsModelGetNonNullOptions) =>
      collectionsModelGetNonNull(context, options),
    getNull: (options?: CollectionsModelGetNullOptions) =>
      collectionsModelGetNull(context, options),
    patchNonNull: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPatchNonNullOptions,
    ) => collectionsModelPatchNonNull(context, body, options),
    patchNull: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPatchNullOptions,
    ) => collectionsModelPatchNull(context, body, options),
  };
}

export function getCollectionsModelOperations(
  context: NullableContext,
): CollectionsModelOperations {
  return {
    ...getCollectionsModel(context),
  };
}
