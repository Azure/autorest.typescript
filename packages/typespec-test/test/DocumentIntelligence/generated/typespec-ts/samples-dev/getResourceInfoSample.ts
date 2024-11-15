// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDocumentIntelligenceClient from "@azure-rest/ai-document-intelligence";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetResourceInfo
 *
 * @summary call operation GetResourceInfo
 */
async function getResourceInfoSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentIntelligenceClient(endpointParam, credential);
  const result = await client.path("/info").get();
  console.log(result);
}

async function main() {
  getResourceInfoSample();
}

main().catch(console.error);
