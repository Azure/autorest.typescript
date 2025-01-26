// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  getLongRunningPoller,
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a cascade delete job for specified field.
 *
 * @summary Create a cascade delete job for specified field.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Fields_CreateCascadeDeleteJob.json
 */
async function fieldsCreateCascadeDeleteJob(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOB123";
  const initialResponse = await client
    .path("/fields/cascade-delete/{jobId}", jobId)
    .put({ queryParameters: { farmerId: "FARMER123", fieldId: "FIELD123" } });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main(): Promise<void> {
  await fieldsCreateCascadeDeleteJob();
}

main().catch(console.error);
