// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { CollectionFormatContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface CollectionFormatClientOptions extends ClientOptions {}

export { CollectionFormatContext } from "../rest/index.js";

/** Test for collectionFormat. */
export function createCollectionFormat(
  options: CollectionFormatClientOptions = {},
): CollectionFormatContext {
  const clientContext = getClient(options);
  return clientContext;
}
