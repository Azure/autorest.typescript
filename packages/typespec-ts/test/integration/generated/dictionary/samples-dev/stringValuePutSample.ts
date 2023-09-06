// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  StringValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function stringValuePutSample() {
  const client = createDictClient();
  const options: StringValuePutParameters = { body: { key: "{Your body}" } };
  const result = await client.path("/type/dictionary/string").put(options);
  console.log(result);
}

async function main() {
  stringValuePutSample();
}

main().catch(console.error);
