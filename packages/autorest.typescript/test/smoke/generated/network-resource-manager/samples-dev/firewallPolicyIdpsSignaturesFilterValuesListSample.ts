// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SignatureOverridesFilterValuesQuery,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves the current filter values for the signatures overrides
 *
 * @summary Retrieves the current filter values for the signatures overrides
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/FirewallPolicyQuerySignatureOverridesFilterValues.json
 */
async function querySignatureOverrides(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "e747cc13-97d4-4a79-b463-42d7f4e558f2";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const firewallPolicyName = "firewallPolicy";
  const parameters: SignatureOverridesFilterValuesQuery = {
    filterName: "severity",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.firewallPolicyIdpsSignaturesFilterValues.list(
    resourceGroupName,
    firewallPolicyName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await querySignatureOverrides();
}

main().catch(console.error);
