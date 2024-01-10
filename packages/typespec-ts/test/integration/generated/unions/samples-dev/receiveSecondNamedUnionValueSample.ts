// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReceiveSecondNamedUnionValue
 *
 * @summary call operation ReceiveSecondNamedUnionValue
 */
async function receiveSecondNamedUnionValueSample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/receive/model2").get();
  console.log(result);
}

async function main() {
  receiveSecondNamedUnionValueSample();
}

main().catch(console.error);
