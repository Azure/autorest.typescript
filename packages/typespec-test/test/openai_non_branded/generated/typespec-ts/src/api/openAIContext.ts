// Licensed under the MIT license.

import { KeyCredential } from "@typespec/ts-http-runtime";
import { ClientOptions } from "@typespec/ts-http-runtime";
import { OpenAIContext } from "../rest/index.js";
import getClient from "../rest/index.js";

export interface OpenAIClientOptions extends ClientOptions {}

export { OpenAIContext } from "../rest/index.js";

/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export function createOpenAI(
  credential: KeyCredential,
  options: OpenAIClientOptions = {},
): OpenAIContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-modular-api`
    : "azsdk-js-modular-api";

  const clientContext = getClient(credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
