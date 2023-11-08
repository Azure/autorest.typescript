// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createOpenAIClient from "@msinternal/openai";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetAzureBatchImageGenerationOperationStatus
 *
 * @summary call operation GetAzureBatchImageGenerationOperationStatus
 */
async function getAzureBatchImageGenerationOperationStatusSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createOpenAIClient(endpoint, credential);
  const operationId = "{Your operationId}";
  const result = await client
    .path("/operations/images/{operationId}", operationId)
    .get();
  console.log(result);
}

async function main() {
  getAzureBatchImageGenerationOperationStatusSample();
}

main().catch(console.error);
