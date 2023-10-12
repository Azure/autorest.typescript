// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createAnomalyDetectorClient, {
  TrainMultivariateModelParameters,
} from "@msinternal/ai-anomaly-detector";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation TrainMultivariateModel
 *
 * @summary call operation TrainMultivariateModel
 */
async function trainMultivariateModelSample() {
  const endpoint = "auto";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const options: TrainMultivariateModelParameters = {
    body: {
      dataSource: "auto",
      dataSchema: "auto",
      startTime: new Date(),
      endTime: new Date(),
      displayName: "auto",
      slidingWindow: 123,
      alignPolicy: {
        alignMode: "Inner",
        fillNAMethod: "auto",
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
            variable: "auto",
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
