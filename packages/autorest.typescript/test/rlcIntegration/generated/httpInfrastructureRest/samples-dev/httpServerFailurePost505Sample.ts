// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpServerFailurePost505Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post505
 *
 * @summary call operation Post505
 */
async function httpServerFailurePost505Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpServerFailurePost505Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/server/505").post(options);
  console.log(result);
}

async function main() {
  httpServerFailurePost505Sample();
}

main().catch(console.error);
