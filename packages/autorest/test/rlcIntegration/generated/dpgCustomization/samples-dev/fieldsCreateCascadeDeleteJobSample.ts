// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  FieldsCreateCascadeDeleteJobParameters,
  getLongRunningPoller
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a cascade delete job for specified field.
 *
 * @summary Create a cascade delete job for specified field.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Fields_CreateCascadeDeleteJob.json
 */
async function fieldsCreateCascadeDeleteJob() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const jobId = "JOB123";
  const options: FieldsCreateCascadeDeleteJobParameters = {
    queryParameters: { farmerId: "FARMER123", fieldId: "FIELD123" }
  };
  const initialResponse = await client
    .path("/fields/cascade-delete/{jobId}", jobId)
    .put(options);
  const poller = getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

fieldsCreateCascadeDeleteJob().catch(console.error);
