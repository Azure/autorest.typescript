// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRetryPut504Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put504
 *
 * @summary call operation Put504
 */
async function httpRetryPut504Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRetryPut504Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/retry/504").put(options);
  console.log(result);
}

async function main() {
  httpRetryPut504Sample();
}

main().catch(console.error);
