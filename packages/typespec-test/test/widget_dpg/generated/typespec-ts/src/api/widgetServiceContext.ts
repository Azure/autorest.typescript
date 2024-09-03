// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KeyCredential } from "@azure/core-auth";
import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";
import { isKeyCredential } from "@azure/core-auth";

export interface WidgetServiceContext extends Client {}

/** Optional parameters for the client. */
export interface WidgetServiceClientOptionalParams extends ClientOptions {}

export function createWidgetService(
  endpoint: string,
  credential: KeyCredential,
  options: WidgetServiceClientOptionalParams = {},
): WidgetServiceContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(
    options.endpoint ?? options.baseUrl ?? endpoint,
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
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
