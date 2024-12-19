// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { KeyCredential, TokenCredential } from "@azure/core-auth";

export interface WidgetManagerContext extends Client {}

/** Optional parameters for the client. */
export interface WidgetManagerClientOptionalParams extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
}

export function createWidgetManager(
  endpointParam: string,
  credential: KeyCredential | TokenCredential,
  options: WidgetManagerClientOptionalParams = {},
): WidgetManagerContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpointParam}/widget`;
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-overload_modular/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://widget.contoso.com/.default",
      ],
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "api-key",
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return clientContext;
}
