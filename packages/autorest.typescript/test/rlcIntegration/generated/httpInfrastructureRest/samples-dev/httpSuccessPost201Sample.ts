// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPost201Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post201
 *
 * @summary call operation Post201
 */
async function httpSuccessPost201Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPost201Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/201").post(options);
  console.log(result);
}

async function main() {
  httpSuccessPost201Sample();
}

main().catch(console.error);
