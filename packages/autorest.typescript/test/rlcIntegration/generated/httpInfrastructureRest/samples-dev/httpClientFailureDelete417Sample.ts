// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailureDelete417Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete417
 *
 * @summary call operation Delete417
 */
async function httpClientFailureDelete417Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailureDelete417Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/417").delete(options);
  console.log(result);
}

async function main() {
  httpClientFailureDelete417Sample();
}

main().catch(console.error);
