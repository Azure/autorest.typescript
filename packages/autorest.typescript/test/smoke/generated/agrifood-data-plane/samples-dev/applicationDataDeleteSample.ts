// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a specified application data resource under a particular farmer.
 *
 * @summary Deletes a specified application data resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/ApplicationData_Delete.json
 */
async function applicationDataDelete() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const farmerId = "FARMER123";
  const applicationDataId = "APPLICATION123";
  const result = await client
    .path(
      "/farmers/{farmerId}/application-data/{applicationDataId}",
      farmerId,
      applicationDataId
    )
    .delete();
  console.log(result);
}

applicationDataDelete().catch(console.error);
