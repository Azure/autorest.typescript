// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a specified seasonal field resource under a particular farmer.
 *
 * @summary Gets a specified seasonal field resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/SeasonalFields_Get.json
 */
async function seasonalFieldsGet() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const farmerId = "FARMER123";
  const seasonalFieldId = "SEASONALFIELD123";
  const result = await client
    .path(
      "/farmers/{farmerId}/seasonal-fields/{seasonalFieldId}",
      farmerId,
      seasonalFieldId
    )
    .get();
  console.log(result);
}

seasonalFieldsGet().catch(console.error);
