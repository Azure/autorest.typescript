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
async function nullableFloatValuePutSample() {
  const client = createDictClient();
  const result = await client
    .path("/type/dictionary/nullable-float")
    .put({ body: { key: 123 } });
  console.log(result);
}

async function main() {
  nullableFloatValuePutSample();
}

main().catch(console.error);
