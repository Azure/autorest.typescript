// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createOpenAIClient from "@msinternal/openai";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetCompletions
 *
 * @summary call operation GetCompletions
 */
async function getCompletionsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createOpenAIClient(endpointParam, credential);
  const deploymentId = "{Your deploymentId}";
  const result = await client
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      body: {
        prompt: ["{Your prompt}"],
        max_tokens: 123,
        temperature: 123,
        top_p: 123,
        logit_bias: { key: 123 },
        user: "{Your user}",
        n: 123,
        logprobs: 123,
        echo: true,
        stop: ["{Your stop}"],
        presence_penalty: 123,
        frequency_penalty: 123,
        best_of: 123,
        stream: true,
        model: "{Your model}",
      },
    });
  console.log(result);
}

async function main(): Promise<void> {
  await getCompletionsSample();
}

main().catch(console.error);
