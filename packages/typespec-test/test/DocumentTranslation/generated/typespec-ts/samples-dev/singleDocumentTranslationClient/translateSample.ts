// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SingleDocumentTranslationClient } from "@azure/load-testing";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to use this API to submit a single translation request to the Document Translation Service.
 *
 * @summary use this API to submit a single translation request to the Document Translation Service.
 * x-ms-original-file: 2024-11-01-preview/DocumentTranslate_MaximumSet_Gen.json
 */
async function translateASingleDocument(): Promise<void> {
  const endpoint = process.env.SINGLE_DOCUMENT_TRANSLATION_ENDPOINT || "";
  const credential = new DefaultAzureCredential();
  const client = new SingleDocumentTranslationClient(endpoint, credential);
  const result = await client.translate("es", {}, { sourceLanguage: "en" });
  console.log(result);
}

async function main(): Promise<void> {
  await translateASingleDocument();
}

main().catch(console.error);
