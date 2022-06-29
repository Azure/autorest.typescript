// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get cascade delete job for specified seasonal field.
 *
 * @summary Get cascade delete job for specified seasonal field.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/SeasonalFields_GetCascadeDeleteJobDetails.json
 */
async function seasonalFieldsGetCascadeDeleteJobDetails() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const jobId = "JOB123";
  const result = await client
    .path("/seasonal-fields/cascade-delete/{jobId}", jobId)
    .get();
  console.log(result);
}

seasonalFieldsGetCascadeDeleteJobDetails().catch(console.error);
