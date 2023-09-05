// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation TrainMultivariateModel
 *
 * @summary call operation TrainMultivariateModel
 */
async function trainMultivariateModelSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const result = await client.path("/multivariate/models").post();
  console.log(result);
}

async function main() {
  trainMultivariateModelSample();
}

main().catch(console.error);
