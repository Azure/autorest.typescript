// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesClient } from "@azure/ai-resources-autogen";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to get latest version of the Index. Latest is defined by most recent created by date.
 *
 * @summary get latest version of the Index. Latest is defined by most recent created by date.
 * x-ms-original-file: 2024-05-01-preview/Indexes_GetLatest_MaximumSet_Gen.json
 */
async function indexesGetLatest(): Promise<void> {
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
  const result = await client.indexes.getLatest("abcdefghijklmnopqrstuv");
  console.log(result);
}

async function main(): Promise<void> {
  await indexesGetLatest();
}

main().catch(console.error);
