// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a specified tillage data resource under a particular farmer.
 *
 * @summary Get a specified tillage data resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/TillageData_Get.json
 */
async function tillageDataGet() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const tillageDataId = "TILLAGEOP123";
  const result = await client
    .path(
      "/farmers/{farmerId}/tillage-data/{tillageDataId}",
      farmerId,
      tillageDataId,
    )
    .get();
  console.log(result);
}

async function main() {
  tillageDataGet();
}

main().catch(console.error);
