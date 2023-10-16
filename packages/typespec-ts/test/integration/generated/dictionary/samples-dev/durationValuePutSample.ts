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
async function durationValuePutSample() {
  const client = createDictClient();
  const result = await client
    .path("/type/dictionary/duration")
    .put({ body: { key: "{Your body}" } });
  console.log(result);
}

async function main() {
  durationValuePutSample();
}

main().catch(console.error);
