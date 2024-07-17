// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { CollectionFormatContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface CollectionFormatClientOptionalParams extends ClientOptions {}

export { CollectionFormatContext } from "../rest/index.js";

/** Test for collectionFormat. */
export function createCollectionFormat(
  options: CollectionFormatClientOptionalParams = {},
): CollectionFormatContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
