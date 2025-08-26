# skip: Should generate sample with required endpoint parameter

This test validates that sample generation includes required endpoint parameters in the client constructor.

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;

@service(#{
  title: "Text Translation",
})
@server(
  "{Endpoint}",
  "Text translation is a cloud-based REST API feature of the Translator service that uses neural machine translation technology to enable quick and accurate source-to-target text translation in real time across all supported languages.",
  {
    @doc("""
      Supported Text Translation endpoints (protocol and hostname, for example:
          https://api.cognitive.microsofttranslator.com).
      """)
    Endpoint: url,
  }
)
@versioned(APIVersion)
namespace TextTranslation;

@doc("Text Translation supported versions")
enum APIVersion {
  @doc("Version 3.0")
  v3_0: "3.0",
}

@doc("Find sentence boundaries")
interface TextTranslationOperations {
  findSentenceBoundaries(
    @body body: InputTextItem[],
    @query("api-version") apiVersion?: string,
    @header("X-ClientTraceId") clientTraceId?: string,
    @query language?: string,
    @query script?: string,
  ): BreakSentenceItem[];
}

model InputTextItem {
  @doc("Input text")
  text: string;
}

model BreakSentenceItem {
  @doc("An array of integers representing the lengths of the sentences in the input text.")
  sentLen: int32[];
}
```

## Examples

```json for findSentenceBoundaries
{
  "title": "Find Sentence Boundaries",
  "operationId": "TextTranslationOperations_FindSentenceBoundaries",
  "parameters": {
    "Endpoint": "https://api.cognitive.microsofttranslator.com",
    "X-ClientTraceId": "svun",
    "language": "en",
    "script": "Latn",
    "api-version": "3.0",
    "body": [
      {
        "text": "How are you? I am fine. What did you do today?"
      }
    ]
  },
  "responses": {
    "200": {
      "body": [
        {
          "sentLen": [
            13,
            11,
            22
          ]
        }
      ]
    }
  }
}
```

## Samples

```ts samples
```