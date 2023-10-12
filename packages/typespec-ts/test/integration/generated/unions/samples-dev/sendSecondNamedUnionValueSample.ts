// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUnionsClient, {
  SendSecondNamedUnionValueParameters,
} from "@msinternal/unions";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation SendSecondNamedUnionValue
 *
 * @summary call operation SendSecondNamedUnionValue
 */
async function sendSecondNamedUnionValueSample() {
  const client = createUnionsClient();
  const options: SendSecondNamedUnionValueParameters = {
    body: {
      namedUnion: { prop1: 123, name: "{Your name}" },
      lastModifiedStartTime: new Date(),
    },
  };
  const result = await client.path("/type/union/model2").post(options);
  console.log(result);
}

async function main() {
  sendSecondNamedUnionValueSample();
}

main().catch(console.error);
