// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createAnomalyDetectorClient, {
  DetectMultivariateLastAnomalyParameters,
} from "@msinternal/ai-anomaly-detector";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectMultivariateLastAnomaly
 *
 * @summary call operation DetectMultivariateLastAnomaly
 */
async function detectMultivariateLastAnomalySample() {
  const endpoint = "auto";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const modelId = "auto";
  const options: DetectMultivariateLastAnomalyParameters = {
    body: {
      variables: [{ variable: "auto", timestamps: ["auto"], values: [123] }],
      topContributorCount: 123,
    },
  };
  const result = await client
    .path("/multivariate/models/{modelId}:detect-last", modelId)
    .post(options);
  console.log(result);
}

async function main() {
  detectMultivariateLastAnomalySample();
}

main().catch(console.error);
