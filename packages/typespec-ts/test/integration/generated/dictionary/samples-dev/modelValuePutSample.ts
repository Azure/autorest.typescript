// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  ModelValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function modelValuePutSample() {
  const client = createDictClient();
  const options: ModelValuePutParameters = {
    body: {
      key: { property: '{Your "property"}', children: { key: {} as any } },
    },
  };
  const result = await client.path("/type/dictionary/model").put(options);
  console.log(result);
}

async function main() {
  modelValuePutSample();
}

main().catch(console.error);
