// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GalleryApplication,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a gallery Application Definition.
 *
 * @summary Create or update a gallery Application Definition.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/gallery/CreateOrUpdateASimpleGalleryApplication.json
 */
async function createOrUpdateASimpleGalleryApplication(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const galleryApplication: GalleryApplication = {
    description: "This is the gallery application description.",
    eula: "This is the gallery application EULA.",
    location: "West US",
    privacyStatementUri: "myPrivacyStatementUri}",
    releaseNoteUri: "myReleaseNoteUri",
    supportedOSType: "Windows",
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryApplications.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryApplicationName,
    galleryApplication,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateASimpleGalleryApplication();
}

main().catch(console.error);
