// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureKeyCredential } from "@azure/core-auth";
import createOpenAIClient, { getLongRunningPoller } from "@msinternal/openai";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation BeginAzureBatchImageGeneration
 *
 * @summary call operation BeginAzureBatchImageGeneration
 */
async function beginAzureBatchImageGenerationSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createOpenAIClient(endpointParam, credential);
  const initialResponse = await client
    .path("/images/generations:submit")
    .post({
      body: {
        prompt: "{Your prompt}",
        n: 123,
        size: "256x256",
        response_format: "url",
        user: "{Your user}",
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  await beginAzureBatchImageGenerationSample();
}

main().catch(console.error);
