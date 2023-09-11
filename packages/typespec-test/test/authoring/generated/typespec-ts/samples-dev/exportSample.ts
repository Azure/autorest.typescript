// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAuthoringClient, {
  ExportParameters,
  getLongRunningPoller,
} from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Export
 *
 * @summary call operation Export
 */
async function exportSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const projectName = "{Your projectName}";
  const options: ExportParameters = {
    queryParameters: { projectFileVersion: '{Your "projectFileVersion"}' },
  };
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/{projectName}:export", projectName)
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  exportSample();
}

main().catch(console.error);
