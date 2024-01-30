// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  paginate,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListFiles
 *
 * @summary call operation ListFiles
 */
async function deviceUpdateListFilesSample() {
  const endpoint = "{Your endpoint}";
  const instanceId = "{Your instanceId}";
  const credential = new DefaultAzureCredential();
  const client = createAzureDeviceUpdateClient(
    endpoint,
    instanceId,
    credential,
  );
  const provider = "{Your provider}";
  const name = "{Your name}";
  const version = "{Your version}";
  const initialResponse = await client
    .path(
      "/updates/providers/{provider}/names/{name}/versions/{version}/files",
      provider,
      name,
      version,
    )
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  deviceUpdateListFilesSample();
}

main().catch(console.error);
