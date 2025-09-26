// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesClient } from "@azure/ai-resources-autogen";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to get a specific version of a Prompt.
 *
 * @summary get a specific version of a Prompt.
 * x-ms-original-file: 2024-05-01-preview/Prompts_Get_MaximumSet_Gen.json
 */
async function promptsGet(): Promise<void> {
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
  const result = await client.prompts.get(
    "abcdefghijklmnopqrstuv",
    "ilgneyhozkqbg",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await promptsGet();
}

main().catch(console.error);
