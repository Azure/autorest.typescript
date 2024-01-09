// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Downloads and returns file stream as response for the given input filePath.
 *
 * @summary Downloads and returns file stream as response for the given input filePath.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Scenes_Download.json
 */
async function scenesDownload() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const result = await client
    .path("/scenes/downloadFiles")
    .get({ queryParameters: { filePath: "https://filePath" } });
  console.log(result);
}

async function main() {
  scenesDownload();
}

main().catch(console.error);
