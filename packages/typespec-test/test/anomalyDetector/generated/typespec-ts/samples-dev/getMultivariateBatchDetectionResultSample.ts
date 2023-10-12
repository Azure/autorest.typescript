// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultivariateBatchDetectionResult
 *
 * @summary call operation GetMultivariateBatchDetectionResult
 */
async function getMultivariateBatchDetectionResultSample() {
  const endpoint = "auto";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const resultId = "auto";
  const result = await client
    .path("/multivariate/detect-batch/{resultId}", resultId)
    .get();
  console.log(result);
}

async function main() {
  getMultivariateBatchDetectionResultSample();
}

main().catch(console.error);
