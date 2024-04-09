// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { CollectionsStringProperty } from "../../models/models.js";
import {
  collectionsStringGet,
  collectionsStringPut,
} from "../../api/collectionsString/index.js";
import {
  CollectionsStringGetOptionalParams,
  CollectionsStringPutOptionalParams,
} from "../../models/options.js";

export interface CollectionsStringOperations {
  get: (
    options?: CollectionsStringGetOptionalParams,
  ) => Promise<CollectionsStringProperty>;
  put: (
    body: CollectionsStringProperty,
    options?: CollectionsStringPutOptionalParams,
  ) => Promise<void>;
}

export function getCollectionsString(context: ValueTypesContext) {
  return {
    get: (options?: CollectionsStringGetOptionalParams) =>
      collectionsStringGet(context, options),
    put: (
      body: CollectionsStringProperty,
      options?: CollectionsStringPutOptionalParams,
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
