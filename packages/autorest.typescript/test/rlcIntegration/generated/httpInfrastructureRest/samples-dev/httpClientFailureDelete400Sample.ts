// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailureDelete400Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete400
 *
 * @summary call operation Delete400
 */
async function httpClientFailureDelete400Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailureDelete400Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/400").delete(options);
  console.log(result);
}

async function main() {
  httpClientFailureDelete400Sample();
}

main().catch(console.error);
