// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { CollectionsModelProperty } from "../../models/models.js";
import {
  collectionsModelGet,
  collectionsModelPut,
} from "../../api/collectionsModel/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface CollectionsModelOperations {
  get: (options?: GetOptions) => Promise<CollectionsModelProperty>;
  put: (body: CollectionsModelProperty, options?: PutOptions) => Promise<void>;
}

export function getCollectionsModel(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => collectionsModelGet(context, options),
    put: (body: CollectionsModelProperty, options?: PutOptions) =>
      collectionsModelPut(context, body, options),
  };
}

export function getCollectionsModelOperations(
  context: ValueTypesContext,
): CollectionsModelOperations {
  return {
    ...getCollectionsModel(context),
  };
}
