// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { LearnClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `LearnClient`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  credentials: TokenCredential | KeyCredential,
  options: ClientOptions = {}
): LearnClient {
  const baseUrl = options.baseUrl ?? `https://learn.microsoft.com/api/v1`;
  options.apiVersion = options.apiVersion ?? "2023-11-01-preview";
  const userAgentInfo = `azsdk-js-mslearn-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://learn.microsoft.com/.default",
      ],
    },
  };

  const client = getClient(baseUrl, credentials, options) as LearnClient;

  if (isKeyCredential(credentials)) {
    client.pipeline.addPolicy({
      name: "customKeyCredentialPolicy",
      async sendRequest(request, next) {
        request.headers.set("Authorization", "bearer " + credentials.key);
        return next(request);
      },
    });
  }

  return client;
}

function isKeyCredential(
  credentials: TokenCredential | KeyCredential
): credentials is KeyCredential {
  return (
    (credentials as KeyCredential).key !== undefined &&
    typeof (credentials as KeyCredential).key === "string"
  );
}
