// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  Int64ValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function int64ValuePutSample() {
  const client = createDictClient();
  const options: Int64ValuePutParameters = { body: { key: 123 } };
  const result = await client.path("/type/dictionary/int64").put(options);
  console.log(result);
}

async function main() {
  int64ValuePutSample();
}

main().catch(console.error);
