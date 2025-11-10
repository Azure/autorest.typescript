// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceLinkerManagementClient } from "@azure/arm-servicelinker";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a dryrun job to do necessary check before actual creation
 *
 * @summary create a dryrun job to do necessary check before actual creation
 * x-ms-original-file: 2024-07-01-preview/ConnectorDryrunCreate.json
 */
async function connectorDryrunCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ServiceLinkerManagementClient(credential, subscriptionId);
  const result = await client.connector.createDryrun(
    "test-rg",
    "westus",
    "dryrunName",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await connectorDryrunCreate();
}

main().catch(console.error);
