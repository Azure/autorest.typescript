// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createOpenAIClient from "@msinternal/openai";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetEmbeddings
 *
 * @summary call operation GetEmbeddings
 */
async function getEmbeddingsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createOpenAIClient(endpointParam, credential);
  const deploymentId = "{Your deploymentId}";
  const result = await client
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      body: {
        user: "{Your user}",
        model: "{Your model}",
        input: ["{Your input}"],
      },
    });
  console.log(result);
}

async function main(): Promise<void> {
  await getEmbeddingsSample();
}

main().catch(console.error);
