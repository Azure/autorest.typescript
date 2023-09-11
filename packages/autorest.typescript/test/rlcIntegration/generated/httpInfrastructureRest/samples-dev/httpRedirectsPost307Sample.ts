// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRedirectsPost307Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post307
 *
 * @summary call operation Post307
 */
async function httpRedirectsPost307Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRedirectsPost307Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/redirect/307").post(options);
  console.log(result);
}

async function main() {
  httpRedirectsPost307Sample();
}

main().catch(console.error);
