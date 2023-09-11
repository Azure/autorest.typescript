// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get200ModelA201ModelC404ModelDDefaultError400Valid
 *
 * @summary call operation Get200ModelA201ModelC404ModelDDefaultError400Valid
 */
async function multipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/200/A/201/C/404/D/default/Error/response/400/valid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidSample();
}

main().catch(console.error);
