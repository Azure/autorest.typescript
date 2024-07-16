// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { MediaTypeContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface MediaTypeClientOptionalParams extends ClientOptions {}

export { MediaTypeContext } from "../rest/index.js";

/** Test the payload with different media types and different types of the payload itself. */
export function createMediaType(
  options: MediaTypeClientOptionalParams = {},
): MediaTypeContext {
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
