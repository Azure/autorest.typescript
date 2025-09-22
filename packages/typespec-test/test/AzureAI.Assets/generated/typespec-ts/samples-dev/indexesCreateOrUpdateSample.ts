// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesClient } from "@azure/ai-resources-autogen";
import * as dotenv from "dotenv";
import { DefaultAzureCredential } from "@azure/identity";

dotenv.config();

/**
 * This sample demonstrates how to creates or updates a IndexVersion.
 *
 * @summary creates or updates a IndexVersion.
 * x-ms-original-file: 2024-05-01-preview/Indexes_CreateOrUpdate_MaximumSet_Gen.json
 */
async function indexesCreateOrUpdate(): Promise<void> {
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
  const result = await client.indexes.createOrUpdate(
    "abcdefghijklmnopqrstuv",
    "vmcuwiyadgftkalrpirwnxrhpaq",
    {
      stage: "dtpknfxaptvifkfpusgwofmzsiquso",
      description: "rrtguhharg",
      systemData: {},
      tags: { key4394: "qwugretdqhhxdvrjdqi" },
      properties: { key4344: "fbczbfsbeynfvkjf" },
      storageUri: "https://mjwjtrv73stvgdiag0.blob.core.windows.net/",
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await indexesCreateOrUpdate();
}

main().catch(console.error);
