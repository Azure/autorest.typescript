// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createTranslatorClient, {
  TransliterateParameters,
} from "@azure-rest/cognitiveservices-translator";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Transliterate
 *
 * @summary call operation Transliterate
 */
async function transliterateSample() {
  const endpoint = "{Your endpoint}";
  const client = createTranslatorClient(endpoint);
  const options: TransliterateParameters = {
    body: [{ text: "{Your text}" }],
    queryParameters: {
      language: "{Your language}",
      fromScript: "{Your fromScript}",
      toScript: "{Your toScript}",
    },
    headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
  };
  const result = await client.path("/transliterate").post(options);
  console.log(result);
}

async function main() {
  transliterateSample();
}

main().catch(console.error);
