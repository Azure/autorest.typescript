// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextTranslationClient } from "@azure-rest/ai-translation-text";

/**
 * This sample demonstrates how to lookup Dictionary Examples
 *
 * @summary lookup Dictionary Examples
 * x-ms-original-file: 3.0/LookupDictionaryExamples_MaximumSet_Gen.json
 */
async function lookupDictionaryExamples(): Promise<void> {
  const Endpoint = "https://api.cognitive.microsofttranslator.com";
  const client = new TextTranslationClient(Endpoint);
  const result = await client.lookupDictionaryExamples(
    "en",
    "es",
    [{ text: "fly", translation: "volar" }],
    { clientTraceId: "vykwwekvcncclrmsyjhbok" },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to lookup Dictionary Examples
 *
 * @summary lookup Dictionary Examples
 * x-ms-original-file: 3.0/LookupDictionaryExamples_MinimumSet_Gen.json
 */
async function lookupDictionaryExamplesWithMinimumProperties(): Promise<void> {
  const Endpoint = "https://api.cognitive.microsofttranslator.com";
  const client = new TextTranslationClient(Endpoint);
  const result = await client.lookupDictionaryExamples("en", "es", [
    { text: "fly", translation: "volar" },
  ]);
  console.log(result);
}

async function main(): Promise<void> {
  await lookupDictionaryExamples();
  await lookupDictionaryExamplesWithMinimumProperties();
}

main().catch(console.error);
