// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailurePost415Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post415
 *
 * @summary call operation Post415
 */
async function httpClientFailurePost415Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailurePost415Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/415").post(options);
  console.log(result);
}

async function main() {
  httpClientFailurePost415Sample();
}

main().catch(console.error);
