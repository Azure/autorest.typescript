// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  getLongRunningPoller,
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a farm operation data ingestion job.
 *
 * @summary Create a farm operation data ingestion job.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/FarmOperations_CreateDataIngestionJob.json
 */
async function farmOperationsCreateDataIngestionJob() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOB123";
  const initialResponse = await client
    .path("/farm-operations/ingest-data/{jobId}", jobId)
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  farmOperationsCreateDataIngestionJob();
}

main().catch(console.error);
