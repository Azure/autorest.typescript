// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  BoundariesGetOverlapParameters
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns overlapping acreage between two boundary Ids.
 *
 * @summary Returns overlapping acreage between two boundary Ids.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Boundaries_GetOverlap.json
 */
async function boundariesGetOverlap() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const farmerId = "FARMER123";
  const boundaryId = "BOUNDARY123";
  const options: BoundariesGetOverlapParameters = {
    queryParameters: {
      otherFarmerId: "FARMER456",
      otherBoundaryId: "BOUNDARY56"
    }
  };
  const result = await client
    .path(
      "/farmers/{farmerId}/boundaries/{boundaryId}/overlap",
      farmerId,
      boundaryId
    )
    .get(options);
  console.log(result);
}

boundariesGetOverlap().catch(console.error);
