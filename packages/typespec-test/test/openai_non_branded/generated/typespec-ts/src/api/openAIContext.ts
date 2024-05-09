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
  const clientContext = getClient(credential, options);
  return clientContext;
}
