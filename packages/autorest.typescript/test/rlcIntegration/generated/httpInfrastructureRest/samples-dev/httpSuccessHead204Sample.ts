// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head204
 *
 * @summary call operation Head204
 */
async function httpSuccessHead204Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/success/204").head();
  console.log(result);
}

async function main() {
  httpSuccessHead204Sample();
}

main().catch(console.error);
