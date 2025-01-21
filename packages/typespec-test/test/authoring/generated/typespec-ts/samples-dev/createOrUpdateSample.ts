// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureKeyCredential } from "@azure/core-auth";
import createAuthoringClient, {
  getLongRunningPoller,
} from "@msinternal/authoring";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdate
 *
 * @summary call operation CreateOrUpdate
 */
async function createOrUpdateSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpointParam, credential);
  const projectName = "{Your projectName}";
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/{projectName}", projectName)
    .patch({
      body: {
        projectKind: "CustomSingleLabelClassification",
        storageInputContainerName: "{Your storageInputContainerName}",
        settings: {},
        multilingual: true,
        description: "{Your description}",
        language: "{Your language}",
      },
      contentType: "application/merge-patch+json",
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  await createOrUpdateSample();
}

main().catch(console.error);
