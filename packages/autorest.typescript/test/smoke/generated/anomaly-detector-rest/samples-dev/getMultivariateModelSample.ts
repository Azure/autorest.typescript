// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorRestClient from "@msinternal/anomaly-detector-rest";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get detailed information of multivariate model, including the training status and variables used in the model.
 *
 * @summary Get detailed information of multivariate model, including the training status and variables used in the model.
 * x-ms-original-file: specification/cognitiveservices/data-plane/AnomalyDetector/stable/v1.1/examples/GetModel.json
 */
async function getMultivariateModel() {
  const endpoint = "{Endpoint}";
  const apiVersion = "v1.1";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorRestClient(
    endpoint,
    apiVersion,
    credential,
  );
  const modelId = "45aad126-aafd-11ea-b8fb-d89ef3400c5f";
  const result = await client
    .path("/multivariate/models/{modelId}", modelId)
    .get();
  console.log(result);
}

async function main() {
  getMultivariateModel();
}

main().catch(console.error);
