// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionsClient from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendFirstNamedUnionValue
 *
 * @summary call operation SendFirstNamedUnionValue
 */
async function sendFirstNamedUnionValueSample() {
  const client = createUnionsClient();
  const result = await client
    .path("/type/union/model1")
    .post({ body: { namedUnion: { name: "{Your name}", prop1: 123 } } });
  console.log(result);
}

async function main() {
  sendFirstNamedUnionValueSample();
}

main().catch(console.error);
