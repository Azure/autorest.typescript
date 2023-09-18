// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  LoadTestAdministrationCreateOrUpdateAppComponentsParameters,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateAppComponents
 *
 * @summary call operation CreateOrUpdateAppComponents
 */
async function loadTestAdministrationCreateOrUpdateAppComponentsSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testId = "{Your testId}";
  const options: LoadTestAdministrationCreateOrUpdateAppComponentsParameters = {
    body: {
      components: {
        key: {
          resourceName: "{Your resourceName}",
          resourceType: "{Your resourceType}",
          displayName: "{Your displayName}",
          kind: "{Your kind}",
        },
      },
    },
    contentType: "application/merge-patch+json",
  };
  const result = await client
    .path("/tests/{testId}/app-components", testId)
    .patch(options);
  console.log(result);
}

async function main() {
  loadTestAdministrationCreateOrUpdateAppComponentsSample();
}

main().catch(console.error);
