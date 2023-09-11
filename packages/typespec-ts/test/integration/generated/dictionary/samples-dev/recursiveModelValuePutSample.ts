// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient, {
  RecursiveModelValuePutParameters,
} from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Put
 *
 * @summary call operation Put
 */
async function recursiveModelValuePutSample() {
  const client = createDictClient();
  const options: RecursiveModelValuePutParameters = {
    body: {
      key: {
        property: '{Your "property"}',
        children: { key: {} as any /**FIXME */ },
      },
    },
  };
  const result = await client
    .path("/type/dictionary/model/recursive")
    .put(options);
  console.log(result);
}

async function main() {
  recursiveModelValuePutSample();
}

main().catch(console.error);
