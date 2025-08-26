// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TextTranslationClient } from "@azure-rest/ai-translation-text";

/**
 * This sample demonstrates how to gets the set of languages currently supported by other operations of the Translator.
 *
 * @summary gets the set of languages currently supported by other operations of the Translator.
 * x-ms-original-file: 3.0/GetSupportedLanguages_MaximumSet_Gen.json
 */
async function getsTheSetOfLanguagesCurrentlySupportedByOtherOperationsOfTheTranslator(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.getSupportedLanguages({
    clientTraceId: "kayfnugjec",
    scope: "translation,transliteration,dictionary",
    acceptLanguage: "en",
    ifNoneMatch: "fpnhruttllvc",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to gets the set of languages currently supported by other operations of the Translator.
 *
 * @summary gets the set of languages currently supported by other operations of the Translator.
 * x-ms-original-file: 3.0/GetSupportedLanguages_MinimumSet_Gen.json
 */
async function getsTheSetOfLanguagesCurrentlySupportedByOtherOperationsOfTheTranslatorWithMinimumProperties(): Promise<void> {
  const client = new TextTranslationClient();
  const result = await client.getSupportedLanguages();
  console.log(result);
}

async function main(): Promise<void> {
  await getsTheSetOfLanguagesCurrentlySupportedByOtherOperationsOfTheTranslator();
  await getsTheSetOfLanguagesCurrentlySupportedByOtherOperationsOfTheTranslatorWithMinimumProperties();
}

main().catch(console.error);
