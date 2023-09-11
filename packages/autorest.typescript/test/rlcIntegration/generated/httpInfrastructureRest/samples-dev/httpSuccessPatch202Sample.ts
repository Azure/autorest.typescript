// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPatch202Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch202
 *
 * @summary call operation Patch202
 */
async function httpSuccessPatch202Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPatch202Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/202").patch(options);
  console.log(result);
}

async function main() {
  httpSuccessPatch202Sample();
}

main().catch(console.error);
