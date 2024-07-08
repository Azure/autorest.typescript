// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/nullableContext.js";
import { CollectionsStringProperty } from "../../models/models.js";
import {
  getNonNull,
  getNull,
  patchNonNull,
  patchNull,
} from "../../api/collectionsString/index.js";
import {
  CollectionsStringGetNonNullOptionalParams,
  CollectionsStringGetNullOptionalParams,
  CollectionsStringPatchNonNullOptionalParams,
  CollectionsStringPatchNullOptionalParams,
} from "../../models/options.js";

/** Interface representing a CollectionsString operations. */
export interface CollectionsStringOperations {
  /** Get models that will return all properties in the model */
  getNonNull: (
    options?: CollectionsStringGetNonNullOptionalParams,
  ) => Promise<CollectionsStringProperty>;
  /** Get models that will return the default object */
  getNull: (
    options?: CollectionsStringGetNullOptionalParams,
  ) => Promise<CollectionsStringProperty>;
  /** Put a body with all properties present. */
  patchNonNull: (
    body: CollectionsStringProperty,
    options?: CollectionsStringPatchNonNullOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  patchNull: (
    body: CollectionsStringProperty,
    options?: CollectionsStringPatchNullOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsString(context: NullableContext) {
  return {
    getNonNull: (options?: CollectionsStringGetNonNullOptionalParams) =>
      getNonNull(context, options),
    getNull: (options?: CollectionsStringGetNullOptionalParams) =>
      getNull(context, options),
    patchNonNull: (
      body: CollectionsStringProperty,
      options?: CollectionsStringPatchNonNullOptionalParams,
    ) => patchNonNull(context, body, options),
    patchNull: (
      body: CollectionsStringProperty,
      options?: CollectionsStringPatchNullOptionalParams,
    ) => patchNull(context, body, options),
  };
}

export function getCollectionsStringOperations(
  context: NullableContext,
): CollectionsStringOperations {
  return {
    ...getCollectionsString(context),
  };
}
