// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorClient, {
  TrainMultivariateModelParameters,
} from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation TrainMultivariateModel
 *
 * @summary call operation TrainMultivariateModel
 */
async function trainMultivariateModelSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const options: TrainMultivariateModelParameters = {
    body: {
      dataSource: '{Your "dataSource"}',
      dataSchema: '{Your "dataSchema"}',
      startTime: new Date(),
      endTime: new Date(),
      displayName: '{Your "displayName"}',
      slidingWindow: 123,
      alignPolicy: {
        alignMode: "Inner",
        fillNAMethod: '{Your "fillNAMethod"}',
        paddingValue: 123,
      },
      status: "CREATED",
      diagnosticsInfo: {
        modelState: {
          epochIds: [123],
          trainLosses: [123],
          validationLosses: [123],
          latenciesInSeconds: [123],
        },
        variableStates: [
          {
            variable: '{Your "variable"}',
            filledNARatio: 123,
            effectiveCount: 123,
            firstTimestamp: new Date(),
            lastTimestamp: new Date(),
          },
        ],
      },
    },
  };
  const result = await client.path("/multivariate/models").post(options);
  console.log(result);
}

async function main() {
  trainMultivariateModelSample();
}

main().catch(console.error);
