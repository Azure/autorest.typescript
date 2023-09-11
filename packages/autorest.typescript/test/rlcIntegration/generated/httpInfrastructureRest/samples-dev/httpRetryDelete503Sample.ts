// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRetryDelete503Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete503
 *
 * @summary call operation Delete503
 */
async function httpRetryDelete503Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRetryDelete503Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/retry/503").delete(options);
  console.log(result);
}

async function main() {
  httpRetryDelete503Sample();
}

main().catch(console.error);
