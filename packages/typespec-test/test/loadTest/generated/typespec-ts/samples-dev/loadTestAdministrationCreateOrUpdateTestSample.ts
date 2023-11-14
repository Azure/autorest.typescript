// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureLoadTestingClient from "@azure-rest/load-testing";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateTest
 *
 * @summary call operation CreateOrUpdateTest
 */
async function loadTestAdministrationCreateOrUpdateTestSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testId = "{Your testId}";
  const result = await client
    .path("/tests/{testId}", testId)
    .patch({
      body: {
        passFailCriteria: {
          passFailMetrics: {
            key: {
              clientMetric: "response_time_ms",
              aggregate: "count",
              condition: "{Your condition}",
              requestName: "{Your requestName}",
              value: 123,
              action: "continue",
            },
          },
        },
        secrets: { key: { value: "{Your value}", type: "AKV_SECRET_URI" } },
        certificate: {
          value: "{Your value}",
          type: "AKV_CERT_URI",
          name: "{Your name}",
        },
        environmentVariables: { key: "{Your environmentVariables}" },
        loadTestConfiguration: {
          engineInstances: 123,
          splitAllCSVs: true,
          quickStartTest: true,
          optionalLoadTestConfig: {
            endpointUrl: "{Your endpointUrl}",
            virtualUsers: 123,
            rampUpTime: 123,
            duration: 123,
          },
        },
        description: "{Your description}",
        displayName: "{Your displayName}",
        subnetId: "{Your subnetId}",
        keyvaultReferenceIdentityType: "{Your keyvaultReferenceIdentityType}",
        keyvaultReferenceIdentityId: "{Your keyvaultReferenceIdentityId}",
      },
      contentType: "application/merge-patch+json",
    });
  console.log(result);
}

async function main() {
  loadTestAdministrationCreateOrUpdateTestSample();
}

main().catch(console.error);
