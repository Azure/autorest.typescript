// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextTranslationClient } from "@azure-rest/ai-translation-text";

/**
 * This sample demonstrates how to find Sentence Boundaries
 *
 * @summary find Sentence Boundaries
 * x-ms-original-file: 3.0/FindSentenceBoundaries_MaximumSet_Gen.json
 */
async function findSentenceBoundaries(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.findSentenceBoundaries(
    [{ text: "How are you? I am fine. What did you do today?" }],
    { clientTraceId: "svun", language: "en", script: "Latn" },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to find Sentence Boundaries
 *
 * @summary find Sentence Boundaries
 * x-ms-original-file: 3.0/FindSentenceBoundaries_MinimumSet_Gen.json
 */
async function findSentenceBoundariesWithMinimumProperties(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.findSentenceBoundaries([
    { text: "How are you? I am fine. What did you do today?" },
  ]);
  console.log(result);
}

async function main(): Promise<void> {
  await findSentenceBoundaries();
  await findSentenceBoundariesWithMinimumProperties();
}

main().catch(console.error);
