// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createDpgCustomizationClient, {
  paginate,
} from "@msinternal/dpg-customization-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Get pages that you will either return to users in pages of raw bodies, or pages of models following growup.
 *
 * @summary Get pages that you will either return to users in pages of raw bodies, or pages of models following growup.
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/nextLink.json
 */
async function dpgNextLink(): Promise<void> {
  const client = createDpgCustomizationClient();
  const mode = "prod";
  const initialResponse = await client
    .path("/customization/paging/{mode}", mode)
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main(): Promise<void> {
  await dpgNextLink();
}

main().catch(console.error);
