// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Get Detector
 *
 * @summary Description for Get Detector
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/Diagnostics_GetSiteDetector.json
 */
async function getAppDetector(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const detectorName = "sitecrashes";
  const slot = "Production";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getSiteDetectorSlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    detectorName,
    slot,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Description for Get Detector
 *
 * @summary Description for Get Detector
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/Diagnostics_GetSiteDetectorSlot.json
 */
async function getAppSlotDetector(): Promise<void> {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const detectorName = "sitecrashes";
  const slot = "staging";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.getSiteDetectorSlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    detectorName,
    slot,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getAppDetector();
  await getAppSlotDetector();
}

main().catch(console.error);
