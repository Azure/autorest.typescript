// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorRestClient from "@msinternal/anomaly-detector-rest";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete an existing multivariate model according to the modelId
 *
 * @summary Delete an existing multivariate model according to the modelId
 * x-ms-original-file: specification/cognitiveservices/data-plane/AnomalyDetector/stable/v1.1/examples/DeleteModel.json
 */
async function deleteMultivariateModel() {
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
    .delete();
  console.log(result);
}

async function main() {
  deleteMultivariateModel();
}

main().catch(console.error);
