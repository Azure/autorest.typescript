// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createOpenAIClient from "@msinternal/openai";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetAzureBatchImageGenerationOperationStatus
 *
 * @summary call operation GetAzureBatchImageGenerationOperationStatus
 */
async function getAzureBatchImageGenerationOperationStatusSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createOpenAIClient(endpointParam, credential);
  const operationId = "{Your operationId}";
  const result = await client.path("/operations/images/{operationId}", operationId).get();
  console.log(result);
}

async function main(): Promise<void> {
  await getAzureBatchImageGenerationOperationStatusSample();
}

main().catch(console.error);
