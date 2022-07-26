// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns Connection link needed in the OAuth flow.
 *
 * @summary Returns Connection link needed in the OAuth flow.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/OAuthTokens_GetOAuthConnectionLink.json
 */
async function oAuthTokensGetOauthConnectionLink() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    Endpoint,
    credential
  );
  const result = await client.path("/oauth/tokens/:connect").post();
  console.log(result);
}

oAuthTokensGetOauthConnectionLink().catch(console.error);
