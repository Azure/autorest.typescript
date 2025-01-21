// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, { paginate } from "@msinternal/authoring";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListProjects
 *
 * @summary call operation ListProjects
 */
async function listProjectsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const initialResponse = await client
    .path("/authoring/analyze-text/projects")
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  await listProjectsSample();
}

main().catch(console.error);
