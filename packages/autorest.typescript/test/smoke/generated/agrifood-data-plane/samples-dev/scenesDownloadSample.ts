// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient, {
  ScenesDownloadParameters
} from "@msinternal/agrifood-data-plane";
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
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const options: ScenesDownloadParameters = {
    queryParameters: { filePath: "https://filePath" }
  };
  const result = await client.path("/scenes/downloadFiles").get(options);
  console.log(result);
}

scenesDownload().catch(console.error);
