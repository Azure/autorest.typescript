// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailurePost406Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post406
 *
 * @summary call operation Post406
 */
async function httpClientFailurePost406Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailurePost406Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/406").post(options);
  console.log(result);
}

async function main() {
  httpClientFailurePost406Sample();
}

main().catch(console.error);
