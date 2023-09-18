// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, {
  GetSupportedLanguagesParameters,
  paginate,
} from "@msinternal/authoring";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetSupportedLanguages
 *
 * @summary call operation GetSupportedLanguages
 */
async function getSupportedLanguagesSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const options: GetSupportedLanguagesParameters = {
    queryParameters: { top: 123, skip: 123, maxpagesize: 123 },
  };
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/global/languages")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  getSupportedLanguagesSample();
}

main().catch(console.error);
