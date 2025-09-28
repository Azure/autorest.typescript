// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesClient } from "@azure/ai-resources-autogen";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to creates or updates a Prompt
 *
 * @summary creates or updates a Prompt
 * x-ms-original-file: 2024-05-01-preview/Prompts_CreateOrUpdate_MaximumSet_Gen.json
 */
async function promptsCreateOrUpdate(): Promise<void> {
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
  const result = await client.prompts.createOrUpdate(
    "abcdefghijklmnopqrstuv",
    "tuhtqwnvpnjjmpabeerth",
    {
      stage: "zvqxcgynwaj",
      description: "koyizsniphigzornxuzqwyufhus",
      systemData: {},
      tags: { key4485: "vkdhpmtdpbjxazikrdqqeh" },
      properties: { key3188: "qdllbnjhwxzbgswaluvbef" },
      dataUri: "https://mjwjtrv73stvgdiag0.blob.core.windows.net/",
      templatePath: "mcpymdxgboqmrkhffaawpeznwa",
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await promptsCreateOrUpdate();
}

main().catch(console.error);
