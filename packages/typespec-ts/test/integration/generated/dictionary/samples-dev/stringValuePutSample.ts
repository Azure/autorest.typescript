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
async function stringValuePutSample() {
  const client = createDictClient();
  const result = await client
    .path("/type/dictionary/string")
    .put({ body: { key: "{Your body}" } });
  console.log(result);
}

async function main() {
  stringValuePutSample();
}

main().catch(console.error);
