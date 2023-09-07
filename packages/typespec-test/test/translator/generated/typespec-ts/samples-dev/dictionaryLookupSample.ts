// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createTranslatorClient, {
  DictionaryLookupParameters,
} from "@azure-rest/cognitiveservices-translator";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DictionaryLookup
 *
 * @summary call operation DictionaryLookup
 */
async function dictionaryLookupSample() {
  const endpoint = "{Your endpoint}";
  const client = createTranslatorClient(endpoint);
  const options: DictionaryLookupParameters = {
    body: [{ text: '{Your "text"}' }],
    queryParameters: { from: '{Your "from"}', to: '{Your "to"}' },
    headers: { "X-ClientTraceId": '{Your "X-ClientTraceId"}' },
  };
  const result = await client.path("/dictionary/lookup").post(options);
  console.log(result);
}

async function main() {
  dictionaryLookupSample();
}

main().catch(console.error);
