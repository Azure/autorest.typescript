// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createTranslatorClient, {
  DetectParameters,
} from "@azure-rest/cognitiveservices-translator";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Detect
 *
 * @summary call operation Detect
 */
async function detectSample() {
  const endpoint = "{Your endpoint}";
  const client = createTranslatorClient(endpoint);
  const options: DetectParameters = {
    body: [{ text: "{Your text}" }],
    headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
  };
  const result = await client.path("/detect").post(options);
  console.log(result);
}

async function main() {
  detectSample();
}

main().catch(console.error);
