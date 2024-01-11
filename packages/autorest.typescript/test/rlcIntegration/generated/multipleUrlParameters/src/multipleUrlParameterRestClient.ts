// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { MultipleUrlParameterRestClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `MultipleUrlParameterRestClient`
 * @param endpoint - The catalog endpoint of your Purview account. Example: https://{accountName}.purview.azure.com
 * @param serviceVersion - the version of api
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  serviceVersion: "v2" | "v1",
  credentials: TokenCredential,
  options: ClientOptions = {},
): MultipleUrlParameterRestClient {
  const baseUrl =
    options.baseUrl ??
    `${endpoint}/catalog/api/atlas/${serviceVersion}/{accountName}`;

  const userAgentInfo = `azsdk-js-multiple-url-parameter-rest/1.0.0-preview1`;
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
      scopes: options.credentials?.scopes ?? ["user_impersonation"],
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as MultipleUrlParameterRestClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return {
    ...client,
    entity: {
      createOrUpdate: (options) => {
        return client.path("/entity").post(options);
      },
      listByGuids: (options) => {
        return client.path("/entity/bulk").get(options);
      },
      createOrUpdateEntities: (options) => {
        return client.path("/entity/bulk").post(options);
      },
      deleteByGuids: (options) => {
        return client.path("/entity/bulk").delete(options);
      },
      addClassification: (options) => {
        return client.path("/entity/bulk/classification").post(options);
      },
      getByGuid: (guid, options) => {
        return client.path("/entity/guid/{guid}", guid).get(options);
      },
      partialUpdateEntityAttributeByGuid: (guid, options) => {
        return client.path("/entity/guid/{guid}", guid).put(options);
      },
      deleteByGuid: (guid, options) => {
        return client.path("/entity/guid/{guid}", guid).delete(options);
      },
      exportGuid: (guid, options) => {
        return client.path("/entity/guid/{guid}:export", guid).put(options);
      },
    },
  };
}
