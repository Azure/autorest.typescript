// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRedirectsPut301Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put301
 *
 * @summary call operation Put301
 */
async function httpRedirectsPut301Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRedirectsPut301Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/redirect/301").put(options);
  console.log(result);
}

async function main() {
  httpRedirectsPut301Sample();
}

main().catch(console.error);
