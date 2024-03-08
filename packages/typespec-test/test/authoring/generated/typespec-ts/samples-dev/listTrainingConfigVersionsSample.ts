// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, { paginate } from "@msinternal/authoring";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListTrainingConfigVersions
 *
 * @summary call operation ListTrainingConfigVersions
 */
async function listTrainingConfigVersionsSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/global/training-config-versions")
    .get({ queryParameters: { top: 123, skip: 123, maxpagesize: 123 } });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listTrainingConfigVersionsSample();
}

main().catch(console.error);
