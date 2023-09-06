// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  DurationValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function durationValuePutSample() {
  const client = createDictClient();
  const options: DurationValuePutParameters = { body: { key: "{Your body}" } };
  const result = await client.path("/type/dictionary/duration").put(options);
  console.log(result);
}

async function main() {
  durationValuePutSample();
}

main().catch(console.error);
