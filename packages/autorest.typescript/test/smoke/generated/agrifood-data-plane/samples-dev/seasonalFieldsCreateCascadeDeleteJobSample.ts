// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  SeasonalFieldsCreateCascadeDeleteJobParameters,
  getLongRunningPoller
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a cascade delete job for specified seasonal field.
 *
 * @summary Create a cascade delete job for specified seasonal field.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/SeasonalFields_CreateCascadeDeleteJob.json
 */
async function seasonalFieldsCreateCascadeDeleteJob() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const jobId = "JOB123";
  const options: SeasonalFieldsCreateCascadeDeleteJobParameters = {
    queryParameters: {
      farmerId: "FARMER123",
      seasonalFieldId: "SEASONALFIELD123"
    }
  };
  const initialResponse = await client
    .path("/seasonal-fields/cascade-delete/{jobId}", jobId)
    .put(options);
  const poller = getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

seasonalFieldsCreateCascadeDeleteJob().catch(console.error);
