// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FaceAdministrationClient } from "@azure/load-testing";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to please refer to https://learn.microsoft.com/rest/api/face/face-list-operations/create-large-face-list for more details.
 *
 * @summary please refer to https://learn.microsoft.com/rest/api/face/face-list-operations/create-large-face-list for more details.
 * x-ms-original-file: v1.3-preview.1/FaceListOperations_CreateLargeFaceList.json
 */
async function createLargeFaceList(): Promise<void> {
  const endpoint = process.env.FACE_ADMINISTRATION_ENDPOINT || "";
  const apiVersion = process.env.FACE_ADMINISTRATION_API_VERSION || "";
  const credential = new DefaultAzureCredential();
  const client = new FaceAdministrationClient(endpoint, apiVersion, credential);
  await client.largeFaceList.create("your_large_face_list_id", "your_large_face_list_name", {
    userData: "your_user_data",
    recognitionModel: "recognition_01",
  });
}

async function main(): Promise<void> {
  await createLargeFaceList();
}

main().catch(console.error);
