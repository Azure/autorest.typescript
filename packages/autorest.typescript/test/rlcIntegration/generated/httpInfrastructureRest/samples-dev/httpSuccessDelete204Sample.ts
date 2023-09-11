// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessDelete204Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete204
 *
 * @summary call operation Delete204
 */
async function httpSuccessDelete204Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessDelete204Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/204").delete(options);
  console.log(result);
}

async function main() {
  httpSuccessDelete204Sample();
}

main().catch(console.error);
