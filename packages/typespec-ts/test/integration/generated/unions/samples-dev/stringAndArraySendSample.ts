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
async function stringAndArraySendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/string-and-array")
    .post({
      body: { prop: { string: "{Your string}", array: "{Your array}" } },
    });
  console.log(result);
}

async function main() {
  stringAndArraySendSample();
}

main().catch(console.error);
