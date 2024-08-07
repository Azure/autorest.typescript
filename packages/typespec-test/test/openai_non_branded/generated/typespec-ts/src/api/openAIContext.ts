// Licensed under the MIT license.

import { KeyCredential } from "@typespec/ts-http-runtime";
import { ClientOptions, Client, getClient } from "@typespec/ts-http-runtime";
import { isKeyCredential } from "@typespec/ts-http-runtime";

export interface OpenAIContext extends Client {}

/** Optional parameters for the client. */
export interface OpenAIClientOptionalParams extends ClientOptions {}

/** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
export function createOpenAI(
  credential: KeyCredential,
  options: OpenAIClientOptionalParams = {},
): OpenAIContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `https://api.openai.com/v1`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const updatedOptions = { ...options, userAgentOptions: { userAgentPrefix } };
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
