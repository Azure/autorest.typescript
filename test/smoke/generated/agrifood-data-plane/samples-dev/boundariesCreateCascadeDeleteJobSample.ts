// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  BoundariesCreateCascadeDeleteJobParameters,
  getLongRunningPoller
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a cascade delete job for specified boundary.
 *
 * @summary Create a cascade delete job for specified boundary.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Boundaries_CreateCascadeDeleteJob.json
 */
async function boundariesCreateCascadeDeleteJob() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const jobId = "JOB123";
  const options: BoundariesCreateCascadeDeleteJobParameters = {
    queryParameters: { farmerId: "FARMER123", boundaryId: "BOUNDARY123" }
  };
  const initialResponse = await client
    .path("/boundaries/cascade-delete/{jobId}", jobId)
    .put(options);
  const poller = getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

boundariesCreateCascadeDeleteJob().catch(console.error);
