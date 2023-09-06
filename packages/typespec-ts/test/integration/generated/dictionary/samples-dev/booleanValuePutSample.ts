// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  BooleanValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function booleanValuePutSample() {
  const client = createDictClient();
  const options: BooleanValuePutParameters = { body: { key: true } };
  const result = await client.path("/type/dictionary/boolean").put(options);
  console.log(result);
}

async function main() {
  booleanValuePutSample();
}

main().catch(console.error);
