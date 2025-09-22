// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesClient } from "@azure/ai-resources-autogen";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to list the latest version of each prompt. Latest is defined by most recent created by date.
 *
 * @summary list the latest version of each prompt. Latest is defined by most recent created by date.
 * x-ms-original-file: 2024-05-01-preview/Prompts_ListLatest_MaximumSet_Gen.json
 */
async function promptsListLatest(): Promise<void> {
  const endpoint = process.env.ENDPOINT || "";
  const subscriptionId = process.env.SUBSCRIPTION_ID || "";
  const resourceGroupName = process.env.RESOURCE_GROUP || "";
  const workspaceName = process.env.WORKSPACE_NAME || "";
  const credential = new DefaultAzureCredential();
  const client = new MachineLearningServicesClient(
    endpoint,
    subscriptionId,
    resourceGroupName,
    workspaceName,
    credential,
  );
  const resArray = new Array();
  for await (const item of client.prompts.listLatest({
    top: 7,
    skip: 14,
    maxpagesize: 2,
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await promptsListLatest();
}

main().catch(console.error);
