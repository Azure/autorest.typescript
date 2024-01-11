// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes an specified oauthProvider resource.
 *
 * @summary Deletes an specified oauthProvider resource.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/OAuthProviders_Delete.json
 */
async function oAuthProvidersDelete() {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const oauthProviderId = "JOHNDEERE";
  const result = await client
    .path("/oauth/providers/{oauthProviderId}", oauthProviderId)
    .delete();
  console.log(result);
}

async function main() {
  oAuthProvidersDelete();
}

main().catch(console.error);
