// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetAllWithValues
 *
 * @summary call operation GetAllWithValues
 */
async function pathItemsGetAllWithValuesSample() {
  const client = createUrlRestClient();
  const globalStringPath = "{Your globalStringPath}";
  const pathItemStringPath = "{Your pathItemStringPath}";
  const localStringPath = "{Your localStringPath}";
  const result = await client
    .path(
      "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
      globalStringPath,
      pathItemStringPath,
      localStringPath
    )
    .get();
  console.log(result);
}

async function main() {
  pathItemsGetAllWithValuesSample();
}

main().catch(console.error);
