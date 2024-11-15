// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDocumentIntelligenceClient from "@azure-rest/ai-document-intelligence";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDocumentModelBuildOperation
 *
 * @summary call operation GetDocumentModelBuildOperation
 */
async function getDocumentModelBuildOperationSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentIntelligenceClient(endpointParam, credential);
  const operationId = "{Your operationId}";
  const result = await client
    .path("/operations/{operationId}", operationId)
    .get({
      headers: { "x-ms-client-request-id": "{Your x-ms-client-request-id}" },
    });
  console.log(result);
}

async function main() {
  getDocumentModelBuildOperationSample();
}

main().catch(console.error);
