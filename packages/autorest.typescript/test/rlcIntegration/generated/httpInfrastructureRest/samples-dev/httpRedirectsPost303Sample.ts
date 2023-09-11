// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRedirectsPost303Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post303
 *
 * @summary call operation Post303
 */
async function httpRedirectsPost303Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRedirectsPost303Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/redirect/303").post(options);
  console.log(result);
}

async function main() {
  httpRedirectsPost303Sample();
}

main().catch(console.error);
