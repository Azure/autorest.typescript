// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/collectionsModel/index.js";
import {
  CollectionsModelGetAllOptionalParams,
  CollectionsModelGetDefaultOptionalParams,
  CollectionsModelPutAllOptionalParams,
  CollectionsModelPutDefaultOptionalParams,
} from "../../models/options.js";

/** Interface representing a CollectionsModel operations. */
export interface CollectionsModelOperations {
  /** Get models that will return all properties in the model */
  getAll: (
    options?: CollectionsModelGetAllOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: CollectionsModelGetDefaultOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsModel(context: OptionalContext) {
  return {
    getAll: (options?: CollectionsModelGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: CollectionsModelGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPutAllOptionalParams,
    ) => putAll(context, body, options),
    putDefault: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getCollectionsModelOperations(
  context: OptionalContext,
): CollectionsModelOperations {
  return {
    ...getCollectionsModel(context),
  };
}
