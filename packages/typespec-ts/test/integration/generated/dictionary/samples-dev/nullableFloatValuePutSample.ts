// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  NullableFloatValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function nullableFloatValuePutSample() {
  const client = createDictClient();
  const options: NullableFloatValuePutParameters = { body: { key: 123 } };
  const result = await client
    .path("/type/dictionary/nullable-float")
    .put(options);
  console.log(result);
}

async function main() {
  nullableFloatValuePutSample();
}

main().catch(console.error);
