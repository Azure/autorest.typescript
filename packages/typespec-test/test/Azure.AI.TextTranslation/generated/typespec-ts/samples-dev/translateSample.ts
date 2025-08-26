// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextTranslationClient } from "@azure-rest/ai-translation-text";

/**
 * This sample demonstrates how to translate Text
 *
 * @summary translate Text
 * x-ms-original-file: 3.0/Translate_MaximumSet_Gen.json
 */
async function translateText(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.translate(["cs"], [{ text: "This is a test." }], {
    clientTraceId: "ndbkaatzsnoetqkiehappoza",
    fromParam: "en",
    textType: "Plain",
    category: "custom",
    profanityAction: "NoAction",
    profanityMarker: "Asterisk",
    includeAlignment: true,
    includeSentenceLength: true,
    suggestedFrom: "en",
    fromScript: "Latn",
    toScript: "Latn",
    allowFallback: true,
  });
  console.log(result);
}

/**
 * This sample demonstrates how to translate Text
 *
 * @summary translate Text
 * x-ms-original-file: 3.0/Translate_MinimumSet_Gen.json
 */
async function translateTextWithMinimumProperties(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.translate(
    ["fmlxpuepn"],
    [{ text: "This is a test." }],
  );
  console.log(result);
}

async function main(): Promise<void> {
  await translateText();
  await translateTextWithMinimumProperties();
}

main().catch(console.error);
