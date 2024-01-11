// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a cascade delete job for specified field.
 *
 * @summary Get a cascade delete job for specified field.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Fields_GetCascadeDeleteJobDetails.json
 */
async function fieldsGetCascadeDeleteJobDetails() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const jobId = "JOB123";
  const result = await client
    .path("/fields/cascade-delete/{jobId}", jobId)
    .get();
  console.log(result);
}

async function main() {
  fieldsGetCascadeDeleteJobDetails();
}

main().catch(console.error);
