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
async function mixedTypesSendSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/mixed-types")
    .post({
      body: {
        prop: {
          model: { name: "{Your name}" },
          literal: { name: "{Your name}" },
          int: { name: "{Your name}" },
          boolean: { name: "{Your name}" },
          array: [{ name: "{Your name}" }],
        },
      },
    });
  console.log(result);
}

async function main() {
  mixedTypesSendSample();
}

main().catch(console.error);
