// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Get cascade delete job for specified seasonal field.
 *
 * @summary Get cascade delete job for specified seasonal field.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/SeasonalFields_GetCascadeDeleteJobDetails.json
 */
async function seasonalFieldsGetCascadeDeleteJobDetails(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOB123";
  const result = await client
    .path("/seasonal-fields/cascade-delete/{jobId}", jobId)
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await seasonalFieldsGetCascadeDeleteJobDetails();
}

main().catch(console.error);
