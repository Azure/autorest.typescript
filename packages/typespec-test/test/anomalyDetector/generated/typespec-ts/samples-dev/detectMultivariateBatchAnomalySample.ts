// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectMultivariateBatchAnomaly
 *
 * @summary call operation DetectMultivariateBatchAnomaly
 */
async function detectMultivariateBatchAnomalySample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpointParam, credential);
  const modelId = "{Your modelId}";
  const result = await client
    .path("/multivariate/models/{modelId}:detect-batch", modelId)
    .post({
      body: {
        dataSource: "{Your dataSource}",
        topContributorCount: 123,
        startTime: new Date(),
        endTime: new Date(),
      },
    });
  console.log(result);
}

async function main() {
  detectMultivariateBatchAnomalySample();
}

main().catch(console.error);
