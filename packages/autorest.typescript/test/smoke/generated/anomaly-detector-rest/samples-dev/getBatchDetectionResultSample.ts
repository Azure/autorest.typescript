// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorRestClient from "@msinternal/anomaly-detector-rest";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to For asynchronous inference, get multivariate anomaly detection result based on resultId returned by the BatchDetectAnomaly api.
 *
 * @summary For asynchronous inference, get multivariate anomaly detection result based on resultId returned by the BatchDetectAnomaly api.
 * x-ms-original-file: specification/cognitiveservices/data-plane/AnomalyDetector/stable/v1.1/examples/GetResult.json
 */
async function getDetectionResult() {
  const endpoint = "{Endpoint}";
  const apiVersion = "v1.1";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorRestClient(
    endpoint,
    apiVersion,
    credential,
  );
  const resultId = "663884e6-b117-11ea-b3de-0242ac130004";
  const result = await client
    .path("/multivariate/detect-batch/{resultId}", resultId)
    .get();
  console.log(result);
}

async function main() {
  getDetectionResult();
}

main().catch(console.error);
