// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesClient } from "@azure/ai-resources-autogen";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to list the versions of an Index given the name.
 *
 * @summary list the versions of an Index given the name.
 * x-ms-original-file: 2024-05-01-preview/Indexes_List_MaximumSet_Gen.json
 */
async function indexesList(): Promise<void> {
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
  for await (const item of client.indexes.list("abcdefghijklmnopqrstuv", "a", {
    tags: "xkyngkevaaqyovihhthnzbbjhgqpv",
    top: 7,
    skip: 14,
    maxpagesize: 2,
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await indexesList();
}

main().catch(console.error);
