// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPost204Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post204
 *
 * @summary call operation Post204
 */
async function httpSuccessPost204Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPost204Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/204").post(options);
  console.log(result);
}

async function main() {
  httpSuccessPost204Sample();
}

main().catch(console.error);
