// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GalleriesGetOptionalParams,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves information about a Shared Image Gallery.
 *
 * @summary Retrieves information about a Shared Image Gallery.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/gallery/GetAGalleryWithSelectPermissions.json
 */
async function getAGalleryWithSelectPermissions(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const select = "Permissions";
  const options: GalleriesGetOptionalParams = { select };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleries.get(
    resourceGroupName,
    galleryName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Retrieves information about a Shared Image Gallery.
 *
 * @summary Retrieves information about a Shared Image Gallery.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/gallery/GetAGallery.json
 */
async function getAGallery(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleries.get(resourceGroupName, galleryName);
  console.log(result);
}

async function main(): Promise<void> {
  await getAGalleryWithSelectPermissions();
  await getAGallery();
}

main().catch(console.error);
