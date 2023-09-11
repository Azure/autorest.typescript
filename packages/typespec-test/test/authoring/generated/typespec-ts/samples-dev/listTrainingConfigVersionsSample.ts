// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAuthoringClient, {
  ListTrainingConfigVersionsParameters,
  paginate,
} from "@msinternal/authoring";
import { AzureKeyCredential } from "@azure/core-auth";
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
  const options: ListTrainingConfigVersionsParameters = {
    queryParameters: { top: 123, skip: 123, maxpagesize: 123 },
  };
  const initialResponse = await client
    .path("/authoring/analyze-text/projects/global/training-config-versions")
    .get(options);
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
