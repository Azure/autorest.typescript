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
async function datetimeValuePutSample() {
  const client = createDictClient();
  const result = await client
    .path("/type/dictionary/datetime")
    .put({ body: { key: new Date() } });
  console.log(result);
}

async function main() {
  datetimeValuePutSample();
}

main().catch(console.error);
