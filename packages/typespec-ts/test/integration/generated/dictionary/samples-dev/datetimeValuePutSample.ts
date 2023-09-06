// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  DatetimeValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function datetimeValuePutSample() {
  const client = createDictClient();
  const options: DatetimeValuePutParameters = { body: { key: new Date() } };
  const result = await client.path("/type/dictionary/datetime").put(options);
  console.log(result);
}

async function main() {
  datetimeValuePutSample();
}

main().catch(console.error);
