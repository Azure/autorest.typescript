// Licensed under the MIT license.

import { KeyCredential } from "@typespec/ts-http-runtime";
import { ClientOptions } from "@typespec/ts-http-runtime";
import { OpenAIContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface OpenAIClientOptionalParams extends ClientOptions {}

export { OpenAIContext } from "../rest/index.js";

/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export function createOpenAI(
  credential: KeyCredential,
  options: OpenAIClientOptionalParams = {},
): OpenAIContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
