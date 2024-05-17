// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { CollectionsIntProperty } from "../../models/models.js";
import {
  collectionsIntGet,
  collectionsIntPut,
} from "../../api/collectionsInt/index.js";
import {
  CollectionsIntGetOptionalParams,
  CollectionsIntPutOptionalParams,
} from "../../models/options.js";

export interface CollectionsIntOperations {
  get: (
    options?: CollectionsIntGetOptionalParams,
  ) => Promise<CollectionsIntProperty>;
  put: (
    body: CollectionsIntProperty,
    options?: CollectionsIntPutOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsInt(context: ValueTypesContext) {
  return {
    get: (options?: CollectionsIntGetOptionalParams) =>
      collectionsIntGet(context, options),
    put: (
      body: CollectionsIntProperty,
      options?: CollectionsIntPutOptionalParams,
    ) => collectionsIntPut(context, body, options),
  };
}

export function getCollectionsIntOperations(
  context: ValueTypesContext,
): CollectionsIntOperations {
  return {
    ...getCollectionsInt(context),
  };
}
