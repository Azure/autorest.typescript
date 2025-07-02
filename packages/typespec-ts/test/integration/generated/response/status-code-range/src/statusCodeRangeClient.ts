// Licensed under the MIT License.

import type { ClientOptions } from "@typespec/ts-http-runtime";
import { getClient } from "@typespec/ts-http-runtime";
import type { StatusCodeRangeClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface StatusCodeRangeClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `StatusCodeRangeClient`
 * @param endpointParam - The parameter endpointParam
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  options: StatusCodeRangeClientOptions = {},
): StatusCodeRangeClient {
  const endpointUrl = options.endpoint ?? `${endpointParam}`;
  const userAgentInfo = `azsdk-js-status-code-range-rest/1.0.0-beta.1`;
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
  const userAgentOptions = { ...options.userAgentOptions };
  
  return getClient(endpointUrl, userAgentOptions) as StatusCodeRangeClient;
}