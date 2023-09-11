// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailureDelete407Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete407
 *
 * @summary call operation Delete407
 */
async function httpClientFailureDelete407Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailureDelete407Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/407").delete(options);
  console.log(result);
}

async function main() {
  httpClientFailureDelete407Sample();
}

main().catch(console.error);
