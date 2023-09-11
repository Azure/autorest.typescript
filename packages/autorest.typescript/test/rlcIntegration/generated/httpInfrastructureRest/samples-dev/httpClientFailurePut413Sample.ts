// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailurePut413Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put413
 *
 * @summary call operation Put413
 */
async function httpClientFailurePut413Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailurePut413Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/413").put(options);
  console.log(result);
}

async function main() {
  httpClientFailurePut413Sample();
}

main().catch(console.error);
