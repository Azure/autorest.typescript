// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ManagedServiceIdentityClient } from "@msinternal/msi-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the systemAssignedIdentity available under the specified RP scope.
 *
 * @summary Gets the systemAssignedIdentity available under the specified RP scope.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/stable/2018-11-30/examples/SystemAssignedIdentityGet.json
 */
async function msiOperationsList(): Promise<void> {
  const scope = "scope";
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential);
  const result = await client.systemAssignedIdentities.getByScope(scope);
  console.log(result);
}

async function main(): Promise<void> {
  await msiOperationsList();
}

main().catch(console.error);
