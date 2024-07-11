// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  collectionsModelGet,
  collectionsModelPut,
} from "../../api/collectionsModel/index.js";
import {
  CollectionsModelGetOptionalParams,
  CollectionsModelPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a CollectionsModel operations. */
export interface CollectionsModelOperations {
  /** Get call */
  get: (
    options?: CollectionsModelGetOptionalParams,
  ) => Promise<CollectionsModelProperty>;
  /** Put operation */
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
