// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, {
  getLongRunningPoller,
} from "@msinternal/authoring";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Importx
 *
 * @summary call operation Importx
 */
async function importxSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const projectName = "{Your projectName}";
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/{projectName}:importx", projectName)
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  importxSample();
}

main().catch(console.error);
