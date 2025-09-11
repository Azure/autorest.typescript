// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { KnownAPCVersions } from "../models/models.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

/** Azure Programmable Connectivity (APC) provides a unified interface to the Network APIs of multiple Telecom Operators. Note that Operators may deprecate a Network API with less advance notice than the Azure standard, in which case APC will also deprecate that Network API. */
export interface ProgrammableConnectivityContext extends Client {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownAPCVersions} that the service accepts. */
  apiVersion: string;
}

/** Optional parameters for the client. */
export interface ProgrammableConnectivityClientOptionalParams
  extends ClientOptions {
  /** The API version to use for this operation. */
  /** Known values of {@link KnownAPCVersions} that the service accepts. */
  apiVersion?: string;
}

/** Azure Programmable Connectivity (APC) provides a unified interface to the Network APIs of multiple Telecom Operators. Note that Operators may deprecate a Network API with less advance notice than the Azure standard, in which case APC will also deprecate that Network API. */
export function createProgrammableConnectivity(
  endpointParam: string,
  credential: TokenCredential,
  options: ProgrammableConnectivityClientOptionalParams = {},
): ProgrammableConnectivityContext {
  const endpointUrl = options.endpoint ?? String(endpointParam);
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = `azsdk-js-programmableconnectivity/1.0.0-beta.1`;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api ${userAgentInfo}`
    : `azsdk-js-api ${userAgentInfo}`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://management.azure.com//.default",
      ],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  const apiVersion = options.apiVersion ?? "2024-02-09-preview";
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
  return { ...clientContext, apiVersion } as ProgrammableConnectivityContext;
}
