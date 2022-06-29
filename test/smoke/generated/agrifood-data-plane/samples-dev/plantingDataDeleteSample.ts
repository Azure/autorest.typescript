// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a specified planting data resource under a particular farmer.
 *
 * @summary Deletes a specified planting data resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/PlantingData_Delete.json
 */
async function plantingDataDelete() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const farmerId = "FARMER123";
  const plantingDataId = "PLANTINGOP123";
  const result = await client
    .path(
      "/farmers/{farmerId}/planting-data/{plantingDataId}",
      farmerId,
      plantingDataId
    )
    .delete();
  console.log(result);
}

plantingDataDelete().catch(console.error);
