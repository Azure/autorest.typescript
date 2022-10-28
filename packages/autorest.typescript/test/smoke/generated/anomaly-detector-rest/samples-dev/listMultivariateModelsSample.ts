// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorRestClient, {
  ListMultivariateModelsParameters,
  paginate
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
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorRestClient(Endpoint, credential);
  const options: ListMultivariateModelsParameters = {
    queryParameters: { skip: 0, top: 10 }
  };
  const initialResponse = await client
    .path("/{ApiVersion}/multivariate/models")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

listMultivariateModel().catch(console.error);
