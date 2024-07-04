// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createDictClient from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function booleanValuePutSample() {
  const client = createDictClient();
  const result = await client
    .path("/type/dictionary/boolean")
    .put({ body: { key: true } });
  console.log(result);
}

async function main() {
  booleanValuePutSample();
}

main().catch(console.error);
