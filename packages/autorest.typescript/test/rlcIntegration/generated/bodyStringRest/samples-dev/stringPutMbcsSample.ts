// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBodyStringRestClient from "@msinternal/body-string-rest";
import "dotenv/config";

/**
 * This sample demonstrates how to Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
 *
 * @summary Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putMbcs.json
 */
async function stringPutMbcs(): Promise<void> {
  const client = createBodyStringRestClient();
  const result = await client
    .path("/string/mbcs")
    .put({
      body: "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€",
    });
  console.log(result);
}

async function main(): Promise<void> {
  await stringPutMbcs();
}

main().catch(console.error);
