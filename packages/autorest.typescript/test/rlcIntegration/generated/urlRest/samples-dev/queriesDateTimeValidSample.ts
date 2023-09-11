// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DateTimeValid
 *
 * @summary call operation DateTimeValid
 */
async function queriesDateTimeValidSample() {
  const client = createUrlRestClient();
  const result = await client
    .path("/queries/datetime/2012-01-01T01%3A01%3A01Z")
    .get();
  console.log(result);
}

async function main() {
  queriesDateTimeValidSample();
}

main().catch(console.error);
