// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createOpenAIClient from "@msinternal/openai";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation GetChatCompletions
 *
 * @summary call operation GetChatCompletions
 */
async function getChatCompletionsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createOpenAIClient(endpointParam, credential);
  const deploymentId = "{Your deploymentId}";
  const result = await client
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      body: {
        messages: [
          {
            role: "system",
            content: "{Your content}",
            name: "{Your name}",
            function_call: {
              name: "{Your name}",
              arguments: "{Your arguments}",
            },
            context: { messages: [{} as any /**FIXME */] },
          },
        ],
        functions: [
          {
            name: "{Your name}",
            description: "{Your description}",
            parameters: "Unknown Type",
          },
        ],
        function_call: "auto",
        max_tokens: 123,
        temperature: 123,
        top_p: 123,
        logit_bias: { key: 123 },
        user: "{Your user}",
        n: 123,
        stop: ["{Your stop}"],
        presence_penalty: 123,
        frequency_penalty: 123,
        stream: true,
        model: "{Your model}",
        dataSources: [
          { type: "AzureCognitiveSearch", parameters: "Unknown Type" },
        ],
      },
    });
  console.log(result);
}

async function main(): Promise<void> {
  await getChatCompletionsSample();
}

main().catch(console.error);
