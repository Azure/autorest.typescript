// Licensed under the MIT License.

import {
  Client,
  ClientOptions,
  getClient,
  KeyCredential,
  isKeyCredential,
} from "@typespec/ts-http-runtime";

export interface AttachmentsContext extends Client {}

/** Optional parameters for the client. */
export interface AttachmentsOptionalParams extends ClientOptions {}

export function createAttachments(
  endpointParam: string,
  credential: KeyCredential,
  options: AttachmentsOptionalParams = {},
): AttachmentsContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-todo-non-branded/1.0.0-beta.1`;
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

  if (options.apiVersion) {
    console.warn(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
