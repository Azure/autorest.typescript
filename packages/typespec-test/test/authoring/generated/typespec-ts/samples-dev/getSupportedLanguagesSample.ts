// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, { paginate } from "@msinternal/authoring";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetSupportedLanguages
 *
 * @summary call operation GetSupportedLanguages
 */
async function getSupportedLanguagesSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/global/languages")
    .get({ queryParameters: { top: 123, skip: 123, maxpagesize: 123 } });
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
