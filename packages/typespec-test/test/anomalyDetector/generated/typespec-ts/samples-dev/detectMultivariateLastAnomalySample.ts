// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectMultivariateLastAnomaly
 *
 * @summary call operation DetectMultivariateLastAnomaly
 */
async function detectMultivariateLastAnomalySample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpointParam, credential);
  const modelId = "{Your modelId}";
  const result = await client
    .path("/multivariate/models/{modelId}:detect-last", modelId)
    .post({
      body: {
        variables: [
          {
            variable: "{Your variable}",
            timestamps: ["{Your timestamps}"],
            values: [123],
          },
        ],
        topContributorCount: 123,
      },
    });
  console.log(result);
}

async function main() {
  detectMultivariateLastAnomalySample();
}

main().catch(console.error);
