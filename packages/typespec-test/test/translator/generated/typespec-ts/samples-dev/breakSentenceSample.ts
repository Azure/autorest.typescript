// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createTranslatorClient, {
  BreakSentenceParameters,
} from "@azure-rest/cognitiveservices-translator";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation BreakSentence
 *
 * @summary call operation BreakSentence
 */
async function breakSentenceSample() {
  const endpoint = "{Your endpoint}";
  const client = createTranslatorClient(endpoint);
  const options: BreakSentenceParameters = {
    body: [{ text: "{Your text}" }],
    queryParameters: { language: "{Your language}", script: "{Your script}" },
    headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
  };
  const result = await client.path("/breaksentence").post(options);
  console.log(result);
}

async function main() {
  breakSentenceSample();
}

main().catch(console.error);
