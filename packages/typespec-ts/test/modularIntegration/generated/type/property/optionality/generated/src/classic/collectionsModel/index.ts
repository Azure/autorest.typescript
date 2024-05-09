// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  collectionsModelGetAll,
  collectionsModelGetDefault,
  collectionsModelPutAll,
  collectionsModelPutDefault,
} from "../../api/collectionsModel/index.js";
import {
  CollectionsModelGetAllOptionalParams,
  CollectionsModelGetDefaultOptionalParams,
  CollectionsModelPutAllOptionalParams,
  CollectionsModelPutDefaultOptionalParams,
} from "../../models/options.js";

export interface CollectionsModelOperations {
  getAll: (
    options?: CollectionsModelGetAllOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  getDefault: (
    options?: CollectionsModelGetDefaultOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  putAll: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsModel(context: OptionalContext) {
  return {
    getAll: (options?: CollectionsModelGetAllOptionalParams) =>
      collectionsModelGetAll(context, options),
    getDefault: (options?: CollectionsModelGetDefaultOptionalParams) =>
      collectionsModelGetDefault(context, options),
    putAll: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPutAllOptionalParams,
    ) => collectionsModelPutAll(context, body, options),
    putDefault: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPutDefaultOptionalParams,
    ) => collectionsModelPutDefault(context, body, options),
  };
}

export function getCollectionsModelOperations(
  context: OptionalContext,
): CollectionsModelOperations {
  return {
    ...getCollectionsModel(context),
  };
}
