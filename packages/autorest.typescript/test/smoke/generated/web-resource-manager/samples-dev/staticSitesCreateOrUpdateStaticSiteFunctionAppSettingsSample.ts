// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StringDictionary,
  WebSiteManagementClient,
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Creates or updates the function app settings of a static site.
 *
 * @summary Description for Creates or updates the function app settings of a static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/CreateOrUpdateStaticSiteFunctionAppSettings.json
 */
async function createsOrUpdatesTheFunctionAppSettingsOfAStaticSite(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const appSettings: StringDictionary = {
    properties: { setting1: "someval", setting2: "someval2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result =
    await client.staticSites.createOrUpdateStaticSiteFunctionAppSettings(
      resourceGroupName,
      name,
      appSettings,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesTheFunctionAppSettingsOfAStaticSite();
}

main().catch(console.error);
