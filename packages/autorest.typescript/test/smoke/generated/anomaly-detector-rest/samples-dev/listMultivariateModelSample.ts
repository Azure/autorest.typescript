// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorRestClient, {
  paginate,
} from "@msinternal/anomaly-detector-rest";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List models of a resource.
 *
 * @summary List models of a resource.
 * x-ms-original-file: specification/cognitiveservices/data-plane/AnomalyDetector/stable/v1.1/examples/ListModel.json
 */
async function listMultivariateModel() {
  const endpoint = "{Endpoint}";
  const apiVersion = "v1.1";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorRestClient(
    endpoint,
    apiVersion,
    credential,
  );
  const initialResponse = await client
    .path("/multivariate/models")
    .get({ queryParameters: { skip: 0, top: 10 } });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listMultivariateModel();
}

main().catch(console.error);
