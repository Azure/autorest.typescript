// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createAnomalyDetectorClient, {
  DetectUnivariateChangePointParameters,
} from "@msinternal/ai-anomaly-detector";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectUnivariateChangePoint
 *
 * @summary call operation DetectUnivariateChangePoint
 */
async function detectUnivariateChangePointSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const options: DetectUnivariateChangePointParameters = {
    body: {
      series: [{ timestamp: new Date(), value: 123 }],
      granularity: "yearly",
      customInterval: 123,
      period: 123,
      stableTrendWindow: 123,
      threshold: 123,
    },
  };
  const result = await client
    .path("/timeseries/changepoint/detect")
    .post(options);
  console.log(result);
}

async function main() {
  detectUnivariateChangePointSample();
}

main().catch(console.error);
