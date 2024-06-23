// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/nullableContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  getNonNull,
  getNull,
  patchNonNull,
  patchNull,
} from "../../api/collectionsModel/index.js";
import {
  CollectionsModelGetNonNullOptionalParams,
  CollectionsModelGetNullOptionalParams,
  CollectionsModelPatchNonNullOptionalParams,
  CollectionsModelPatchNullOptionalParams,
} from "../../models/options.js";

export interface CollectionsModelOperations {
  getNonNull: (
    options?: CollectionsModelGetNonNullOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  getNull: (
    options?: CollectionsModelGetNullOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  patchNonNull: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPatchNonNullOptionalParams,
  ) => Promise<void>;
  patchNull: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPatchNullOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsModel(context: NullableContext) {
  return {
    getNonNull: (options?: CollectionsModelGetNonNullOptionalParams) =>
      getNonNull(context, options),
    getNull: (options?: CollectionsModelGetNullOptionalParams) =>
      getNull(context, options),
    patchNonNull: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPatchNonNullOptionalParams,
    ) => patchNonNull(context, body, options),
    patchNull: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPatchNullOptionalParams,
    ) => patchNull(context, body, options),
  };
}

export function getCollectionsModelOperations(
  context: NullableContext,
): CollectionsModelOperations {
  return {
    ...getCollectionsModel(context),
  };
}
