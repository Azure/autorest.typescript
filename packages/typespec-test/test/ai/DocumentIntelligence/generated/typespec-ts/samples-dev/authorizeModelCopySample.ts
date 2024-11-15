// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDocumentIntelligenceClient from "@azure-rest/ai-document-intelligence";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation AuthorizeModelCopy
 *
 * @summary call operation AuthorizeModelCopy
 */
async function authorizeModelCopySample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createDocumentIntelligenceClient(endpointParam, credential);
  const result = await client
    .path("/documentModels:authorizeCopy")
    .post({
      body: {
        modelId: "{Your modelId}",
        description: "{Your description}",
        tags: { key: "{Your tags}" },
      },
    });
  console.log(result);
}

async function main() {
  authorizeModelCopySample();
}

main().catch(console.error);
