// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createTranslatorClient, {
  GetLanguagesParameters,
} from "@azure-rest/cognitiveservices-translator";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetLanguages
 *
 * @summary call operation GetLanguages
 */
async function getLanguagesSample() {
  const endpoint = "{Your endpoint}";
  const client = createTranslatorClient(endpoint);
  const options: GetLanguagesParameters = {
    queryParameters: { scope: "{Your scope}" },
    headers: {
      "X-ClientTraceId": "{Your X-ClientTraceId}",
      "Accept-Language": "{Your Accept-Language}",
      "If-None-Match": "{Your If-None-Match}",
    },
  };
  const result = await client.path("/languages").get(options);
  console.log(result);
}

async function main() {
  getLanguagesSample();
}

main().catch(console.error);
