// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  paginate,
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns a paginated list of seasonal field resources under a particular farmer.
 *
 * @summary Returns a paginated list of seasonal field resources under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/SeasonalFields_ListByFarmerId.json
 */
async function seasonalFieldsListByFarmerId(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const initialResponse = await client
    .path("/farmers/{farmerId}/seasonal-fields", farmerId)
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main(): Promise<void> {
  await seasonalFieldsListByFarmerId();
}

main().catch(console.error);
