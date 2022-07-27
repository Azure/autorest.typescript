// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { WidgetServiceClient } from "./clientDefinitions";

export default function createClient(
  $host: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): WidgetServiceClient {
  const baseUrl = options.baseUrl ?? `${$host}`;

  options = {
    ...options,
    credentials: {
      scopes: ["https://example.net/.default"]
    }
  };

  const userAgentInfo = `azsdk-js-widget-service-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as WidgetServiceClient;

  return {
    ...client,
    widgetService: {
      list: (options) => {
        return client.path("/").get(options);
      },
      create: (options) => {
        return client.path("/").post(options);
      },
      read: (id, options) => {
        return client.path("/widgets/{id}", id).get(options);
      },
      customGet: (options) => {
        return client.path("/customGet").get(options);
      }
    }
  };
}
