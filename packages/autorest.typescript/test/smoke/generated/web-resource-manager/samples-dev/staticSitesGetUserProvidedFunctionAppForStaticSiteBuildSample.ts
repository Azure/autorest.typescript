// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Gets the details of the user provided function app registered with a static site build
 *
 * @summary Description for Gets the details of the user provided function app registered with a static site build
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/GetUserProvidedFunctionAppForStaticSiteBuild.json
 */
async function getDetailsOfTheUserProvidedFunctionAppRegisteredWithAStaticSiteBuild(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const environmentName = "default";
  const functionAppName = "testFunctionApp";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result =
    await client.staticSites.getUserProvidedFunctionAppForStaticSiteBuild(
      resourceGroupName,
      name,
      environmentName,
      functionAppName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await getDetailsOfTheUserProvidedFunctionAppRegisteredWithAStaticSiteBuild();
}

main().catch(console.error);
