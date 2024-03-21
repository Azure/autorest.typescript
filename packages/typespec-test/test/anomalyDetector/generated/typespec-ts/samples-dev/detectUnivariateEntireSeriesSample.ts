// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectUnivariateEntireSeries
 *
 * @summary call operation DetectUnivariateEntireSeries
 */
async function detectUnivariateEntireSeriesSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpointParam, credential);
  const result = await client
    .path("/timeseries/entire/detect")
    .post({
      body: {
        series: [{ timestamp: new Date(), value: 123 }],
        granularity: "yearly",
        customInterval: 123,
        period: 123,
        maxAnomalyRatio: 123,
        sensitivity: 123,
        imputeMode: "auto",
        imputeFixedValue: 123,
      },
    });
  console.log(result);
}

async function main() {
  detectUnivariateEntireSeriesSample();
}

main().catch(console.error);
