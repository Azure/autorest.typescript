// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { CollectionsIntProperty } from "../../models/models.js";
import {
  collectionsIntGet,
  collectionsIntPut,
} from "../../api/collectionsInt/index.js";
import {
  CollectionsIntGetOptions,
  CollectionsIntPutOptions,
} from "../../models/options.js";

export interface CollectionsIntOperations {
  get: (options?: CollectionsIntGetOptions) => Promise<CollectionsIntProperty>;
  put: (
    body: CollectionsIntProperty,
    options?: CollectionsIntPutOptions,
  ) => Promise<void>;
}

export function getCollectionsInt(context: ValueTypesContext) {
  return {
    get: (options?: CollectionsIntGetOptions) =>
      collectionsIntGet(context, options),
    put: (body: CollectionsIntProperty, options?: CollectionsIntPutOptions) =>
      collectionsIntPut(context, body, options),
  };
}

export function getCollectionsIntOperations(
  context: ValueTypesContext,
): CollectionsIntOperations {
  return {
    ...getCollectionsInt(context),
  };
}
