// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../../logger.js";
import {
  _Metrics,
  _metricsSerializer,
  _metricsDeserializer,
  _PagedTestFileInfo,
  _pagedTestFileInfoSerializer,
  _pagedTestFileInfoDeserializer,
  _PagedTest,
  _pagedTestSerializer,
  _pagedTestDeserializer,
  _PagedTestRun,
  _pagedTestRunSerializer,
  _pagedTestRunDeserializer,
  _PagedTestProfile,
  _pagedTestProfileSerializer,
  _pagedTestProfileDeserializer,
  _PagedTestProfileRun,
  _pagedTestProfileRunSerializer,
  _pagedTestProfileRunDeserializer,
} from "../../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

export interface TestProfileAdministrationContext extends Client {}

/** Optional parameters for the client. */
export interface TestProfileAdministrationClientOptionalParams
  extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export function createTestProfileAdministration(
  endpointParam: string,
  credential: TokenCredential,
  options: TestProfileAdministrationClientOptionalParams = {},
): TestProfileAdministrationContext {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `https://${endpointParam}`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://cnt-prod.loadtesting.azure.com/.default",
      ],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  const apiVersion = options.apiVersion ?? "2024-05-01-preview";
  clientContext.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version")) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });
  return clientContext;
}
