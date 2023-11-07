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
async function modelValuePutSample() {
  const client = createDictClient();
  const result = await client
    .path("/type/dictionary/model")
    .put({
      body: {
        key: {
          property: "{Your property}",
          children: { key: {} as any /**FIXME */ },
        },
      },
    });
  console.log(result);
}

async function main() {
  modelValuePutSample();
}

main().catch(console.error);
