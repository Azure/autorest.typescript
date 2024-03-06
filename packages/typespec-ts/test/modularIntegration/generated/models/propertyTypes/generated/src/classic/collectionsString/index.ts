// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { CollectionsStringProperty } from "../../models/models.js";
import {
  collectionsStringGet,
  collectionsStringPut,
} from "../../api/collectionsString/index.js";
import {
  CollectionsStringGetOptions,
  CollectionsStringPutOptions,
} from "../../models/options.js";

export interface CollectionsStringOperations {
  get: (
    options?: CollectionsStringGetOptions,
  ) => Promise<CollectionsStringProperty>;
  put: (
    body: CollectionsStringProperty,
    options?: CollectionsStringPutOptions,
  ) => Promise<void>;
}

export function getCollectionsString(context: ValueTypesContext) {
  return {
    get: (options?: CollectionsStringGetOptions) =>
      collectionsStringGet(context, options),
    put: (
      body: CollectionsStringProperty,
      options?: CollectionsStringPutOptions,
    ) => collectionsStringPut(context, body, options),
  };
}

export function getCollectionsStringOperations(
  context: ValueTypesContext,
): CollectionsStringOperations {
  return {
    ...getCollectionsString(context),
  };
}
