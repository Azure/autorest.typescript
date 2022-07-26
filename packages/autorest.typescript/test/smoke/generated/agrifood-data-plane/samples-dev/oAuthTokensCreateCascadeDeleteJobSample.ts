// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  OAuthTokensCreateCascadeDeleteJobParameters,
  getLongRunningPoller
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
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const jobId = "JOBID123";
  const options: OAuthTokensCreateCascadeDeleteJobParameters = {
    queryParameters: { farmerId: "FARMER123", oauthProviderId: "JOHNDEERE" }
  };
  const initialResponse = await client
    .path("/oauth/tokens/remove/{jobId}", jobId)
    .put(options);
  const poller = getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

oAuthTokensCreateCascadeDeleteJob().catch(console.error);
