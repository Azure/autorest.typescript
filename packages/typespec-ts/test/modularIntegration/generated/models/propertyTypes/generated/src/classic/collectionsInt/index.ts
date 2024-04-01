// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { CollectionsIntProperty } from "../../models/models.js";
import {
  collectionsIntGet,
  collectionsIntPut,
} from "../../api/collectionsInt/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface CollectionsIntOperations {
  get: (options?: GetOptions) => Promise<CollectionsIntProperty>;
  put: (body: CollectionsIntProperty, options?: PutOptions) => Promise<void>;
}

export function getCollectionsInt(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => collectionsIntGet(context, options),
    put: (body: CollectionsIntProperty, options?: PutOptions) =>
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
