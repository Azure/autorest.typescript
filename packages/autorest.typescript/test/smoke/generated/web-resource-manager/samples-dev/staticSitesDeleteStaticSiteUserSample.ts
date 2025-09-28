// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Deletes the user entry from the static site.
 *
 * @summary Description for Deletes the user entry from the static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/DeleteStaticSiteUser.json
 */
async function deleteAUserForAStaticSite(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const authprovider = "aad";
  const userid = "1234";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.deleteStaticSiteUser(
    resourceGroupName,
    name,
    authprovider,
    userid,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteAUserForAStaticSite();
}

main().catch(console.error);
