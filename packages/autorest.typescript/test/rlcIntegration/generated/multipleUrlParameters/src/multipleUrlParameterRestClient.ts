// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { MultipleUrlParameterRestClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class MultipleUrlParameterRestClient class.
 * @param Endpoint type: string The catalog endpoint of your Purview account. Example: https://{accountName}.purview.azure.com
 * @param serviceVersion type: "v2" | "v1" the version of api
 * @param credentials type: TokenCredential
 */
export default function createClient(
  Endpoint: string,
  serviceVersion: "v2" | "v1",
  credentials: TokenCredential,
  options: ClientOptions = {}
): MultipleUrlParameterRestClient {
  const baseUrl =
    options.baseUrl ?? `${Endpoint}/catalog/api/atlas/${serviceVersion}`;

  options = {
    ...options,
    credentials: {
      scopes: ["user_impersonation"]
    }
  };

  const userAgentInfo = `azsdk-js-multiple-url-parameter-rest/1.0.0-preview1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as MultipleUrlParameterRestClient;

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
      }
    }
  };
}
