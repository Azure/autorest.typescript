// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  UnknownValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function unknownValuePutSample() {
  const client = createDictClient();
  const options: UnknownValuePutParameters = { body: { key: "Unknown Type" } };
  const result = await client.path("/type/dictionary/unknown").put(options);
  console.log(result);
}

async function main() {
  unknownValuePutSample();
}

main().catch(console.error);
