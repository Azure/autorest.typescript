// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  collectionsModelGetAll,
  collectionsModelGetDefault,
  collectionsModelPutAll,
  collectionsModelPutDefault,
} from "../../api/collectionsModel/index.js";
import {
  CollectionsModelGetAllOptions,
  CollectionsModelGetDefaultOptions,
  CollectionsModelPutAllOptions,
  CollectionsModelPutDefaultOptions,
} from "../../models/options.js";

export interface CollectionsModelOperations {
  getAll: (
    options?: CollectionsModelGetAllOptions,
  ) => Promise<CollectionsModelProperty>;
  getDefault: (
    options?: CollectionsModelGetDefaultOptions,
  ) => Promise<CollectionsModelProperty>;
  putAll: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPutDefaultOptions,
  ) => Promise<void>;
}

export function getCollectionsModel(context: OptionalContext) {
  return {
    getAll: (options?: CollectionsModelGetAllOptions) =>
      collectionsModelGetAll(context, options),
    getDefault: (options?: CollectionsModelGetDefaultOptions) =>
      collectionsModelGetDefault(context, options),
    putAll: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPutAllOptions,
    ) => collectionsModelPutAll(context, body, options),
    putDefault: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPutDefaultOptions,
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
