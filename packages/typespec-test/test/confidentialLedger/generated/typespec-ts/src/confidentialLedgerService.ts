// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { logger } from "./logger";
import { TokenCredential } from "@azure/core-auth";
import { ConfidentialLedgerServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `ConfidentialLedgerServiceClient`
 * @param ledgerUri type: string, The parameter ledgerUri
 * @param credentials type: TokenCredential, uniquely identify client credential
 * @param options type: ClientOptions&InternalPipelineOptions, the parameter for all optional parameters
 */
export default function createClient(
  ledgerUri: string,
  credentials: TokenCredential,
  options: ClientOptions & InternalPipelineOptions = {}
): ConfidentialLedgerServiceClient {
  const baseUrl = options.baseUrl ?? `${ledgerUri}`;
  options.apiVersion = options.apiVersion ?? "2022-05-13";
  options = {
    ...options,
    credentials: {
      scopes: ["https://confidential-ledger.azure.com/.default"],
    },
  };

  const userAgentInfo = `azsdk-js-confidential-ledger-rest/1.0.0-beta.1`;
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
      logger: logger.info,
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as ConfidentialLedgerServiceClient;

  return client;
}
