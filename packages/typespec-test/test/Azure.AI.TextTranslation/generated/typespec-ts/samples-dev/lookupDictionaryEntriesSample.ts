// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextTranslationClient } from "@azure-rest/ai-translation-text";

/**
 * This sample demonstrates how to lookup Dictionary Entries
 *
 * @summary lookup Dictionary Entries
 * x-ms-original-file: 3.0/LookupDictionaryEntries_MaximumSet_Gen.json
 */
async function lookupDictionaryEntries(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.lookupDictionaryEntries(
    "en",
    "es",
    [{ text: "fly" }],
    { clientTraceId: "yqst" },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to lookup Dictionary Entries
 *
 * @summary lookup Dictionary Entries
 * x-ms-original-file: 3.0/LookupDictionaryEntries_MinimumSet_Gen.json
 */
async function lookupDictionaryEntriesWithMinimumProperties(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.lookupDictionaryEntries("en", "es", [
    { text: "fly" },
  ]);
  console.log(result);
}

async function main(): Promise<void> {
  await lookupDictionaryEntries();
  await lookupDictionaryEntriesWithMinimumProperties();
}

main().catch(console.error);
