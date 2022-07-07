// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDpgCustomizationClient, {
  PostModelParameters
} from "@msinternal/dpg-customization-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Post either raw response as a model and pass in 'raw' for mode, or grow up your operation to take a model instead, and put in 'model' as mode.
 *
 * @summary Post either raw response as a model and pass in 'raw' for mode, or grow up your operation to take a model instead, and put in 'model' as mode.
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/postModel.json
 */
async function dpgPostModel() {
  const client = createDpgCustomizationClient();
  const mode = "uat";
  const options: PostModelParameters = { body: { hello: "test" } };
  const result = await client
    .path("/customization/model/{mode}", mode)
    .post(options);
  console.log(result);
}

dpgPostModel().catch(console.error);
