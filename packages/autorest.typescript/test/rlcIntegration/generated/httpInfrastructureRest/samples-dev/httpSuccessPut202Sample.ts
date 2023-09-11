// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPut202Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put202
 *
 * @summary call operation Put202
 */
async function httpSuccessPut202Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPut202Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/202").put(options);
  console.log(result);
}

async function main() {
  httpSuccessPut202Sample();
}

main().catch(console.error);
