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
async function mixedLiteralsSendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/mixed-literals")
    .post({
      body: {
        prop: {
          stringLiteral: "a",
          intLiteral: "a",
          floatLiteral: "a",
          booleanLiteral: "a",
        },
      },
    });
  console.log(result);
}

async function main() {
  mixedLiteralsSendSample();
}

main().catch(console.error);
