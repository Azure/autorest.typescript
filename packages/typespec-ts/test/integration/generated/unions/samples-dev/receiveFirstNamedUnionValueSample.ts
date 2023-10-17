// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReceiveFirstNamedUnionValue
 *
 * @summary call operation ReceiveFirstNamedUnionValue
 */
async function receiveFirstNamedUnionValueSample() {
  const client = createUnionsClient();
  const result = await client.path("/type/union/receive/model1").get();
  console.log(result);
}

async function main() {
  receiveFirstNamedUnionValueSample();
}

main().catch(console.error);
