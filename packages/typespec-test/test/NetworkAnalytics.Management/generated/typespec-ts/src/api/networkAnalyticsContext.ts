// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { NetworkAnalyticsContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface NetworkAnalyticsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { NetworkAnalyticsContext } from "../rest/index.js";

export function createNetworkAnalytics(
  credential: TokenCredential,
  options: NetworkAnalyticsClientOptions = {},
): NetworkAnalyticsContext {
  const clientContext = getClient(credential, {
    userAgentOptions: {
      userAgentPrefix:
        options?.userAgentOptions?.userAgentPrefix ??
        "azsdk-js-arm-networkanalytics-api/1.0.0-beta.1",
    },
    ...options,
  });
  return clientContext;
}
