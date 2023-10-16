// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createUnionBodyClient from "@msinternal/union-body";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ResponseUnionBody
 *
 * @summary call operation ResponseUnionBody
 */
async function responseUnionBodySample() {
  const endpoint = "{Your endpoint}";
  const client = createUnionBodyClient(endpoint);
  const result = await client.path("/response-union-body").get();
  console.log(result);
}

async function main() {
  responseUnionBodySample();
}

main().catch(console.error);
