// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  collectionsModelGet,
  collectionsModelPut,
} from "../../api/collectionsModel/index.js";
import {
  CollectionsModelGetOptionalParams,
  CollectionsModelPutOptionalParams,
} from "../../models/options.js";

export interface CollectionsModelOperations {
  get: (
    options?: CollectionsModelGetOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  put: (
    body: CollectionsModelProperty,
    options?: CollectionsModelPutOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsModel(context: ValueTypesContext) {
  return {
    get: (options?: CollectionsModelGetOptionalParams) =>
      collectionsModelGet(context, options),
    put: (
      body: CollectionsModelProperty,
      options?: CollectionsModelPutOptionalParams,
    ) => collectionsModelPut(context, body, options),
  };
}

export function getCollectionsModelOperations(
  context: ValueTypesContext,
): CollectionsModelOperations {
  return {
    ...getCollectionsModel(context),
  };
}
