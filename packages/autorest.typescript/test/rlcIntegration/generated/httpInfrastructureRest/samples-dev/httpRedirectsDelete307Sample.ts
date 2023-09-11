// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRedirectsDelete307Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete307
 *
 * @summary call operation Delete307
 */
async function httpRedirectsDelete307Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRedirectsDelete307Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/redirect/307").delete(options);
  console.log(result);
}

async function main() {
  httpRedirectsDelete307Sample();
}

main().catch(console.error);
