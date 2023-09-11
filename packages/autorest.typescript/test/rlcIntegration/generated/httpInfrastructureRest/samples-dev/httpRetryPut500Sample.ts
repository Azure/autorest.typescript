// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRetryPut500Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put500
 *
 * @summary call operation Put500
 */
async function httpRetryPut500Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRetryPut500Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/retry/500").put(options);
  console.log(result);
}

async function main() {
  httpRetryPut500Sample();
}

main().catch(console.error);
