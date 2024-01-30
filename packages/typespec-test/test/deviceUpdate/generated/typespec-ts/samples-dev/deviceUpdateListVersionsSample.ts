// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DefaultAzureCredential } from "@azure/identity";
import createAzureDeviceUpdateClient, {
  paginate,
} from "@azure-rest/iot-device-update";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListVersions
 *
 * @summary call operation ListVersions
 */
async function deviceUpdateListVersionsSample() {
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
  const initialResponse = await client
    .path("/updates/providers/{provider}/names/{name}/versions", provider, name)
    .get({ queryParameters: { filter: "{Your filter}" } });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  deviceUpdateListVersionsSample();
}

main().catch(console.error);
