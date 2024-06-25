// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { MediaTypeContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface MediaTypeClientOptions extends ClientOptions {}

export { MediaTypeContext } from "../rest/index.js";

/** Test the payload with different media types and different types of the payload itself. */
export function createMediaType(
  options: MediaTypeClientOptions = {},
): MediaTypeContext {
  const clientContext = getClient({
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-payload-mediaType-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
