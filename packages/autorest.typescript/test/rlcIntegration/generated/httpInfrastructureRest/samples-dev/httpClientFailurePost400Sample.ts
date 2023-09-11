// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailurePost400Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post400
 *
 * @summary call operation Post400
 */
async function httpClientFailurePost400Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailurePost400Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/400").post(options);
  console.log(result);
}

async function main() {
  httpClientFailurePost400Sample();
}

main().catch(console.error);
