// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  getLongRunningPoller,
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a cascade delete job for OAuth tokens.
 *
 * @summary Create a cascade delete job for OAuth tokens.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/OAuthTokens_CreateCascadeDeleteJob.json
 */
async function oAuthTokensCreateCascadeDeleteJob() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOBID123";
  const initialResponse = await client
    .path("/oauth/tokens/remove/{jobId}", jobId)
    .put({
      queryParameters: { farmerId: "FARMER123", oauthProviderId: "JOHNDEERE" },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  oAuthTokensCreateCascadeDeleteJob();
}

main().catch(console.error);
