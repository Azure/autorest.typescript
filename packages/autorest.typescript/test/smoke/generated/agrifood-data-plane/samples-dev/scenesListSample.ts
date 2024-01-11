// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  paginate,
} from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns a paginated list of scene resources.
 *
 * @summary Returns a paginated list of scene resources.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Scenes_List.json
 */
async function scenesList() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const initialResponse = await client
    .path("/scenes")
    .get({
      queryParameters: {
        provider: "Microsoft",
        farmerId: "FARMER123",
        boundaryId: "BOUNDARY123",
      },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  scenesList();
}

main().catch(console.error);
