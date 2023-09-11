// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRetryPatch500Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch500
 *
 * @summary call operation Patch500
 */
async function httpRetryPatch500Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRetryPatch500Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/retry/500").patch(options);
  console.log(result);
}

async function main() {
  httpRetryPatch500Sample();
}

main().catch(console.error);
