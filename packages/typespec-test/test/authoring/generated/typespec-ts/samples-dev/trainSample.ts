// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAuthoringClient, {
  TrainParameters,
  getLongRunningPoller,
} from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Train
 *
 * @summary call operation Train
 */
async function trainSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAuthoringClient(endpoint, credential);
  const projectName = "{Your projectName}";
  const options: TrainParameters = {
    body: { modelLabel: '{Your "modelLabel"}' },
  };
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/{projectName}:train", projectName)
    .post(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  trainSample();
}

main().catch(console.error);
