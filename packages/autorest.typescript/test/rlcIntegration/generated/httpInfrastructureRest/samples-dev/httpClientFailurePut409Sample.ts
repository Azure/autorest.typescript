// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailurePut409Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put409
 *
 * @summary call operation Put409
 */
async function httpClientFailurePut409Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailurePut409Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/409").put(options);
  console.log(result);
}

async function main() {
  httpClientFailurePut409Sample();
}

main().catch(console.error);
