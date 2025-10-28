// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  TagsObject,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates custom IP prefix tags.
 *
 * @summary Updates custom IP prefix tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/CustomIpPrefixUpdateTags.json
 */
async function updatePublicIPAddressTags(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const customIpPrefixName = "test-customipprefix";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.customIPPrefixes.updateTags(
    resourceGroupName,
    customIpPrefixName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updatePublicIPAddressTags();
}

main().catch(console.error);
