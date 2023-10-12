// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultivariateModel
 *
 * @summary call operation GetMultivariateModel
 */
async function getMultivariateModelSample() {
  const endpoint = "auto";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const modelId = "auto";
  const result = await client
    .path("/multivariate/models/{modelId}", modelId)
    .get();
  console.log(result);
}

async function main() {
  getMultivariateModelSample();
}

main().catch(console.error);
