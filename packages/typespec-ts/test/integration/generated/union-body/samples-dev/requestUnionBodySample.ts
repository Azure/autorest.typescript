// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUnionBodyClient, {
  RequestUnionBodyParameters,
} from "@msinternal/union-body";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation RequestUnionBody
 *
 * @summary call operation RequestUnionBody
 */
async function requestUnionBodySample() {
  const endpoint = "{Your endpoint}";
  const client = createUnionBodyClient(endpoint);
  const options: RequestUnionBodyParameters = { body: { payMethod: "01" } };
  const result = await client.path("/request-union-body").post(options);
  console.log(result);
}

async function main() {
  requestUnionBodySample();
}

main().catch(console.error);
