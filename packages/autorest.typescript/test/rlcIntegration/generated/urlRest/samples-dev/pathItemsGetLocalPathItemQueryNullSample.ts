// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetLocalPathItemQueryNull
 *
 * @summary call operation GetLocalPathItemQueryNull
 */
async function pathItemsGetLocalPathItemQueryNullSample() {
  const client = createUrlRestClient();
  const globalStringPath = "{Your globalStringPath}";
  const pathItemStringPath = "{Your pathItemStringPath}";
  const localStringPath = "{Your localStringPath}";
  const result = await client
    .path(
      "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
      globalStringPath,
      pathItemStringPath,
      localStringPath
    )
    .get();
  console.log(result);
}

async function main() {
  pathItemsGetLocalPathItemQueryNullSample();
}

main().catch(console.error);
