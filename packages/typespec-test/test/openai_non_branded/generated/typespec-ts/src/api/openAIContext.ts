// Licensed under the MIT License.

import {
  Client,
  ClientOptions,
  getClient,
  KeyCredential,
  isKeyCredential,
} from "@typespec/ts-http-runtime";

/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export interface OpenAIContext extends Client {}

/** Optional parameters for the client. */
export interface OpenAIClientOptionalParams extends ClientOptions {}

/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export function createOpenAI(
  credential: KeyCredential,
  options: OpenAIClientOptionalParams = {},
): OpenAIContext {
  const endpointUrl = options.endpoint ?? `https://api.openai.com/v1`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-openai-non-branded/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);

  if (isKeyCredential(credential)) {
    clientContext.pipeline.addPolicy({
      name: "customKeyCredentialPolicy",
      sendRequest(request, next) {
        request.headers.set("Authorization", "Bearer " + credential.key);
        return next(request);
      },
    });
  }
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  if (options.apiVersion) {
    console.warn(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
