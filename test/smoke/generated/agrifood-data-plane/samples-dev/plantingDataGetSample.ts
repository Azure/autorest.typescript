// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a specified planting data resource under a particular farmer.
 *
 * @summary Get a specified planting data resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/PlantingData_Get.json
 */
async function plantingDataGet() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const farmerId = "FARMER123";
  const plantingDataId = "PLANTINGOP123";
  const result = await client
    .path(
      "/farmers/{farmerId}/planting-data/{plantingDataId}",
      farmerId,
      plantingDataId
    )
    .get();
  console.log(result);
}

plantingDataGet().catch(console.error);
