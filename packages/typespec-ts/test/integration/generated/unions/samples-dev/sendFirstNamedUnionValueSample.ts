// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUnionsClient, {
  SendFirstNamedUnionValueParameters,
} from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendFirstNamedUnionValue
 *
 * @summary call operation SendFirstNamedUnionValue
 */
async function sendFirstNamedUnionValueSample() {
  const client = createUnionsClient();
  const options: SendFirstNamedUnionValueParameters = {
    body: { namedUnion: { name: "{Your name}", prop1: 123 } },
  };
  const result = await client.path("/type/union/model1").post(options);
  console.log(result);
}

async function main() {
  sendFirstNamedUnionValueSample();
}

main().catch(console.error);
