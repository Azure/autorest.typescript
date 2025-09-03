// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextTranslationClient } from "@azure-rest/ai-translation-text";

/**
 * This sample demonstrates how to transliterate Text
 *
 * @summary transliterate Text
 * x-ms-original-file: 3.0/Transliterate_MaximumSet_Gen.json
 */
async function transliterateText(): Promise<void> {
  const Endpoint = "https://api.cognitive.microsofttranslator.com";
  const client = new TextTranslationClient(Endpoint);
  const result = await client.transliterate(
    "zh-Hans",
    "Hans",
    "Latn",
    [{ text: "这是个测试。" }],
    { clientTraceId: "dzncrimwmvtwjnheh" },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to transliterate Text
 *
 * @summary transliterate Text
 * x-ms-original-file: 3.0/Transliterate_MinimumSet_Gen.json
 */
async function transliterateTextWithMinimumProperties(): Promise<void> {
  const Endpoint = "https://api.cognitive.microsofttranslator.com";
  const client = new TextTranslationClient(Endpoint);
  const result = await client.transliterate("zh-Hans", "Hans", "Latn", [
    { text: "这是个测试。" },
  ]);
  console.log(result);
}

async function main(): Promise<void> {
  await transliterateText();
  await transliterateTextWithMinimumProperties();
}

main().catch(console.error);
