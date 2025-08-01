// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAuthoringClient from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to call operation ListTrainingConfigVersions
 *
 * @summary call operation ListTrainingConfigVersions
 */
async function listTrainingConfigVersionsSample(): Promise<void> {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const result = await client
    .path("/authoring/analyze-text/projects/global/training-config-versions")
    .get({ queryParameters: { top: 123, skip: 123, maxpagesize: 123 } });
  console.log(result);
}

async function main(): Promise<void> {
  await listTrainingConfigVersionsSample();
}

main().catch(console.error);
