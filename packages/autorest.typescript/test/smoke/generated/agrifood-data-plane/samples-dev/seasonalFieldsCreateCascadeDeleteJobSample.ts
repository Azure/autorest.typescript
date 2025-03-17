// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  getLongRunningPoller,
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a cascade delete job for specified seasonal field.
 *
 * @summary Create a cascade delete job for specified seasonal field.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/SeasonalFields_CreateCascadeDeleteJob.json
 */
async function seasonalFieldsCreateCascadeDeleteJob(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOB123";
  const initialResponse = await client
    .path("/seasonal-fields/cascade-delete/{jobId}", jobId)
    .put({
      queryParameters: {
        farmerId: "FARMER123",
        seasonalFieldId: "SEASONALFIELD123",
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main(): Promise<void> {
  await seasonalFieldsCreateCascadeDeleteJob();
}

main().catch(console.error);
