// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns overlapping acreage between two boundary Ids.
 *
 * @summary Returns overlapping acreage between two boundary Ids.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Boundaries_GetOverlap.json
 */
async function boundariesGetOverlap(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const boundaryId = "BOUNDARY123";
  const result = await client
    .path(
      "/farmers/{farmerId}/boundaries/{boundaryId}/overlap",
      farmerId,
      boundaryId,
    )
    .get({
      queryParameters: {
        otherFarmerId: "FARMER456",
        otherBoundaryId: "BOUNDARY56",
      },
    });
  console.log(result);
}

async function main(): Promise<void> {
  await boundariesGetOverlap();
}

main().catch(console.error);
