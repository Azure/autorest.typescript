// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPatch200Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch200
 *
 * @summary call operation Patch200
 */
async function httpSuccessPatch200Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPatch200Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/200").patch(options);
  console.log(result);
}

async function main() {
  httpSuccessPatch200Sample();
}

main().catch(console.error);
