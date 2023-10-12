// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createAnomalyDetectorClient, {
  DetectMultivariateBatchAnomalyParameters,
} from "@msinternal/ai-anomaly-detector";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectMultivariateBatchAnomaly
 *
 * @summary call operation DetectMultivariateBatchAnomaly
 */
async function detectMultivariateBatchAnomalySample() {
  const endpoint = "auto";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const modelId = "auto";
  const options: DetectMultivariateBatchAnomalyParameters = {
    body: {
      dataSource: "auto",
      topContributorCount: 123,
      startTime: new Date(),
      endTime: new Date(),
    },
  };
  const result = await client
    .path("/multivariate/models/{modelId}:detect-batch", modelId)
    .post(options);
  console.log(result);
}

async function main() {
  detectMultivariateBatchAnomalySample();
}

main().catch(console.error);
