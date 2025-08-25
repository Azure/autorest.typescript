// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Get the properties of a Kubernetes Environment.
 *
 * @summary Description for Get the properties of a Kubernetes Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/KubeEnvironments_Get.json
 */
async function getKubeEnvironmentsByName(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "examplerg";
  const name = "jlaw-demo1";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.kubeEnvironments.get(resourceGroupName, name);
  console.log(result);
}

async function main(): Promise<void> {
  await getKubeEnvironmentsByName();
}

main().catch(console.error);
