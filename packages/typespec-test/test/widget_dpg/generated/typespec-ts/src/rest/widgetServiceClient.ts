// Licensed under the MIT license.

import { getClient, ClientOptions } from "@typespec/ts-http-runtime";
import { WidgetServiceContext } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `WidgetServiceContext`
 * @param endpoint - The parameter endpoint
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {},
): WidgetServiceContext {
  const baseUrl = options.baseUrl ?? `${endpoint}`;

  const userAgentInfo = `azsdk-js-widget_dpg-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as WidgetServiceContext;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
