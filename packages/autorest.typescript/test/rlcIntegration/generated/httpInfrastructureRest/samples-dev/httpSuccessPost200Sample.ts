// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPost200Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post200
 *
 * @summary call operation Post200
 */
async function httpSuccessPost200Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPost200Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/200").post(options);
  console.log(result);
}

async function main() {
  httpSuccessPost200Sample();
}

main().catch(console.error);
