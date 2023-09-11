// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailurePut404Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put404
 *
 * @summary call operation Put404
 */
async function httpClientFailurePut404Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailurePut404Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/404").put(options);
  console.log(result);
}

async function main() {
  httpClientFailurePut404Sample();
}

main().catch(console.error);
