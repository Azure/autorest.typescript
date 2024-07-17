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
} from "../../api/options.js";

/** Interface representing a CollectionsModel operations. */
export interface CollectionsModelOperations {
  /** Get models that will return all properties in the model */
  getNonNull: (
    options?: CollectionsModelGetNonNullOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  /** Get models that will return the default object */
  getNull: (
    options?: CollectionsModelGetNullOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  /** Put a body with all properties present. */
  patchNonNull: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPatchNonNullOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
