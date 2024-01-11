// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a specified oauthProvider resource.
 *
 * @summary Get a specified oauthProvider resource.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/OAuthProviders_Get.json
 */
async function oAuthProvidersGet() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const oauthProviderId = "JOHNDEERE";
  const result = await client
    .path("/oauth/providers/{oauthProviderId}", oauthProviderId)
    .get();
  console.log(result);
}

async function main() {
  oAuthProvidersGet();
}

main().catch(console.error);
