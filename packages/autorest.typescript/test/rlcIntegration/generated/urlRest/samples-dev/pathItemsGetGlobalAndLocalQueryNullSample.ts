// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetGlobalAndLocalQueryNull
 *
 * @summary call operation GetGlobalAndLocalQueryNull
 */
async function pathItemsGetGlobalAndLocalQueryNullSample() {
  const client = createUrlRestClient();
  const globalStringPath = "{Your globalStringPath}";
  const pathItemStringPath = "{Your pathItemStringPath}";
  const localStringPath = "{Your localStringPath}";
  const result = await client
    .path(
      "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
      globalStringPath,
      pathItemStringPath,
      localStringPath
    )
    .get();
  console.log(result);
}

async function main() {
  pathItemsGetGlobalAndLocalQueryNullSample();
}

main().catch(console.error);
