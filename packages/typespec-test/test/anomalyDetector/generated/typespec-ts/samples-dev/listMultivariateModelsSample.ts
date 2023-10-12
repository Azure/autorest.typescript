// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createAnomalyDetectorClient, {
  ListMultivariateModelsParameters,
  paginate,
} from "@msinternal/ai-anomaly-detector";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListMultivariateModels
 *
 * @summary call operation ListMultivariateModels
 */
async function listMultivariateModelsSample() {
  const endpoint = "auto";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const options: ListMultivariateModelsParameters = {
    queryParameters: { skip: 123, top: 123 },
  };
  const initialResponse = await client
    .path("/multivariate/models")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listMultivariateModelsSample();
}

main().catch(console.error);
