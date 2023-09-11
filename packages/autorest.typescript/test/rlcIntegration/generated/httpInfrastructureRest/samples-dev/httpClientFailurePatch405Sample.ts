// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpClientFailurePatch405Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch405
 *
 * @summary call operation Patch405
 */
async function httpClientFailurePatch405Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpClientFailurePatch405Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/failure/client/405").patch(options);
  console.log(result);
}

async function main() {
  httpClientFailurePatch405Sample();
}

main().catch(console.error);
