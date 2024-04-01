// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { CollectionsStringProperty } from "../../models/models.js";
import {
  collectionsStringGet,
  collectionsStringPut,
} from "../../api/collectionsString/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface CollectionsStringOperations {
  get: (options?: GetOptions) => Promise<CollectionsStringProperty>;
  put: (body: CollectionsStringProperty, options?: PutOptions) => Promise<void>;
}

export function getCollectionsString(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => collectionsStringGet(context, options),
    put: (body: CollectionsStringProperty, options?: PutOptions) =>
      collectionsStringPut(context, body, options),
  };
}

export function getCollectionsStringOperations(
  context: ValueTypesContext,
): CollectionsStringOperations {
  return {
    ...getCollectionsString(context),
  };
}
