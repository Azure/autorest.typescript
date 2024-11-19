// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateAppComponents
 *
 * @summary call operation CreateOrUpdateAppComponents
 */
async function loadTestRunCreateOrUpdateAppComponentsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpointParam, credential);
  const testRunId = "{Your testRunId}";
  const result = await client
    .path("/test-runs/{testRunId}/app-components", testRunId)
    .patch({
      body: {
        components: {
          key: {
            resourceName: "{Your resourceName}",
            resourceType: "{Your resourceType}",
            displayName: "{Your displayName}",
            kind: "{Your kind}",
          },
        },
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  loadTestRunCreateOrUpdateAppComponentsSample();
}

main().catch(console.error);
