// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPatch204Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch204
 *
 * @summary call operation Patch204
 */
async function httpSuccessPatch204Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPatch204Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/204").patch(options);
  console.log(result);
}

async function main() {
  httpSuccessPatch204Sample();
}

main().catch(console.error);
