// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a specified harvest data resource under a particular farmer.
 *
 * @summary Deletes a specified harvest data resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/HarvestData_Delete.json
 */
async function harvestDataDelete() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const farmerId = "FARMER123";
  const harvestDataId = "HARVESTOP123";
  const result = await client
    .path(
      "/farmers/{farmerId}/harvest-data/{harvestDataId}",
      farmerId,
      harvestDataId
    )
    .delete();
  console.log(result);
}

harvestDataDelete().catch(console.error);
