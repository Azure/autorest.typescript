// Licensed under the MIT License.

import {
  Client,
  ClientOptions,
  getClient,
  KeyCredential,
  isKeyCredential,
} from "@typespec/ts-http-runtime";

export interface TodoContext extends Client {}

/** Optional parameters for the client. */
export interface TodoClientOptionalParams extends ClientOptions {}

export function createTodo(
  endpointParam: string,
  credential: KeyCredential,
  options: TodoClientOptionalParams = {},
): TodoContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-todo-non-branded/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
  };
  const clientContext = getClient(
    options.endpoint ?? String(endpointParam),
    undefined,
    updatedOptions,
  );

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
