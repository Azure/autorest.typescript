// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAuthoringClient, {
  CreateOrUpdateParameters,
  getLongRunningPoller,
} from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdate
 *
 * @summary call operation CreateOrUpdate
 */
async function createOrUpdateSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const projectName = "{Your projectName}";
  const options: CreateOrUpdateParameters = {
    body: {
      projectKind: "CustomSingleLabelClassification",
      storageInputContainerName: '{Your "storageInputContainerName"}',
      settings: { key: '{Your "settings"}' },
      multilingual: true,
      description: '{Your "description"}',
      language: '{Your "language"}',
    },
    contentType: "application/merge-patch+json",
  };
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/{projectName}", projectName)
    .patch(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  createOrUpdateSample();
}

main().catch(console.error);
