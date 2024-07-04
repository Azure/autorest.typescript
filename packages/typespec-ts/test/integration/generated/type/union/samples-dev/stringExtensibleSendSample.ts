// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Send
 *
 * @summary call operation Send
 */
async function stringExtensibleSendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/string-extensible")
    .post({ body: { prop: "b" } });
  console.log(result);
}

async function main() {
  stringExtensibleSendSample();
}

main().catch(console.error);
