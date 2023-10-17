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
async function unknownValuePutSample() {
  const client = createDictClient();
  const result = await client
    .path("/type/dictionary/unknown")
    .put({ body: { key: "Unknown Type" } });
  console.log(result);
}

async function main() {
  unknownValuePutSample();
}

main().catch(console.error);
