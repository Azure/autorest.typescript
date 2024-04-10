// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendSecondNamedUnionValue
 *
 * @summary call operation SendSecondNamedUnionValue
 */
async function sendSecondNamedUnionValueSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/model2")
    .post({ body: { namedUnion: { name: "{Your name}", prop1: 123 } } });
  console.log(result);
}

async function main() {
  sendSecondNamedUnionValueSample();
}

main().catch(console.error);
