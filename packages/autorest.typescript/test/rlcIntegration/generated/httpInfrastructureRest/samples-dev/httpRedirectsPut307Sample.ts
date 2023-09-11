// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRedirectsPut307Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put307
 *
 * @summary call operation Put307
 */
async function httpRedirectsPut307Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRedirectsPut307Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/redirect/307").put(options);
  console.log(result);
}

async function main() {
  httpRedirectsPut307Sample();
}

main().catch(console.error);
