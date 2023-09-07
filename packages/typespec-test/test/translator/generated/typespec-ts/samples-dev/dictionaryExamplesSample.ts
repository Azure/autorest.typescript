// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createTranslatorClient, {
  DictionaryExamplesParameters,
} from "@azure-rest/cognitiveservices-translator";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DictionaryExamples
 *
 * @summary call operation DictionaryExamples
 */
async function dictionaryExamplesSample() {
  const endpoint = "{Your endpoint}";
  const client = createTranslatorClient(endpoint);
  const options: DictionaryExamplesParameters = {
    body: [{ translation: '{Your "translation"}', text: '{Your "text"}' }],
    queryParameters: { from: '{Your "from"}', to: '{Your "to"}' },
    headers: { "X-ClientTraceId": '{Your "X-ClientTraceId"}' },
  };
  const result = await client.path("/dictionary/examples").post(options);
  console.log(result);
}

async function main() {
  dictionaryExamplesSample();
}

main().catch(console.error);
