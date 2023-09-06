// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  Float32ValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function float32ValuePutSample() {
  const client = createDictClient();
  const options: Float32ValuePutParameters = { body: { key: 123 } };
  const result = await client.path("/type/dictionary/float32").put(options);
  console.log(result);
}

async function main() {
  float32ValuePutSample();
}

main().catch(console.error);
