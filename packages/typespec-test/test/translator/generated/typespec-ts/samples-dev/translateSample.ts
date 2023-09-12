// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createTranslatorClient, {
  TranslateParameters,
} from "@azure-rest/cognitiveservices-translator";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Translate
 *
 * @summary call operation Translate
 */
async function translateSample() {
  const endpoint = "{Your endpoint}";
  const client = createTranslatorClient(endpoint);
  const options: TranslateParameters = {
    body: [{ text: "{Your text}" }],
    queryParameters: {
      to: "{Your to}",
      from: "{Your from}",
      textType: "plain",
      category: "{Your category}",
      profanityAction: "NoAction",
      profanityMarker: "Asterisk",
      includeAlignment: true,
      includeSentenceLength: true,
      suggestedFrom: "{Your suggestedFrom}",
      fromScript: "{Your fromScript}",
      toScript: "{Your toScript}",
      allowFallback: true,
    },
    headers: { "X-ClientTraceId": "{Your X-ClientTraceId}" },
  };
  const result = await client.path("/translate").post(options);
  console.log(result);
}

async function main() {
  translateSample();
}

main().catch(console.error);
