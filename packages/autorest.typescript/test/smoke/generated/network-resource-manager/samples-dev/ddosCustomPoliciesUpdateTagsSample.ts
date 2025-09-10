// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TagsObject,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a DDoS custom policy tags.
 *
 * @summary Update a DDoS custom policy tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/DdosCustomPolicyUpdateTags.json
 */
async function dDoSCustomPolicyUpdateTags(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const ddosCustomPolicyName = "test-ddos-custom-policy";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ddosCustomPolicies.updateTags(
    resourceGroupName,
    ddosCustomPolicyName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await dDoSCustomPolicyUpdateTags();
}

main().catch(console.error);
