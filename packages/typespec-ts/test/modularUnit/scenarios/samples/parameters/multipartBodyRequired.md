# Should generate correct sample code for required multipart body with required field

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;

@service(#{
  title: "Translation Service",
})
namespace TranslationService;

model DocumentTranslateContent {
  document: HttpPart<bytes>;
  glossary?: HttpPart<bytes[]>;
}

model DocumentTranslateBody {
  @query("sourceLanguage")
  sourceLanguage?: string;

  @query("targetLanguage")
  targetLanguage: string;

  @doc("Content Type as multipart/form-data")
  @header
  contentType: "multipart/form-data";

  @multipartBody
  body: DocumentTranslateContent;
}

@route("/translate")
interface TranslationOperations {
  @post
  translate(...DocumentTranslateBody): {
    @statusCode statusCode: 200;
    @body result: bytes;
  };
}
```

## Examples

```json
{
  "title": "Translate a document",
  "operationId": "TranslationOperations_Translate",
  "parameters": {
    "sourceLanguage": "en",
    "targetLanguage": "es",
    "body": {
      "document": "TXkgdHJhbnNsYXRlZCBkb2N1bWVudA=="
    }
  },
  "responses": {
    "200": {
      "body": "VHJhZHVjaWRvIGRvY3VtZW50bw=="
    }
  }
}
```

## Provide generated samples

```ts samples
/** This file path is /samples-dev/translateSample.ts */
import { TranslationServiceClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to execute translate
 *
 * @summary execute translate
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function translateADocument(): Promise<void> {
  const endpoint = process.env.TRANSLATION_SERVICE_ENDPOINT || "";
  const client = new TranslationServiceClient(endpoint);
  const result = await client.translate("es", {}, { sourceLanguage: "en" });
  console.log(result);
}

async function main(): Promise<void> {
  await translateADocument();
}

main().catch(console.error);
```
