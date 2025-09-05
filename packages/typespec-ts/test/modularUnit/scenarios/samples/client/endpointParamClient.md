# Should generate client constructor with required parameters in samples

Sample generation should handle required parameters for client constructors correctly.

## TypeSpec

```tsp
@service(#{
  title: "Text Translation Service",
})
@server("{endpoint}", "Text Translation Service endpoint", {
    @doc("""
      Supported Text Translation endpoints (protocol and hostname, for example:
          https://api.cognitive.microsofttranslator.com).
      """)
  endpoint: url,
})
namespace TextTranslation;
model InputTextItem {
  @doc("The text to translate")
  text: string;
}
model BreakSentenceItem {
  @doc("The detected sentences")
  sentLen: int32[];
}
op findSentenceBoundaries(
  @body body: InputTextItem[],
  @header("X-ClientTraceId") clientTraceId?: string,
  @query language?: string,
  @query script?: string,
): BreakSentenceItem[];
```

## Example

```json
{
  "title": "findSentenceBoundaries",
  "operationId": "findSentenceBoundaries",
  "parameters": {
    "endpoint": "https://api.cognitive.microsofttranslator.com",
    "body": [
      {
        "text": "How are you? I am fine. What did you do today?"
      }
    ],
    "clientTraceId": "test-trace-id",
    "language": "en",
    "script": "Latn"
  },
  "responses": {
    "200": {
      "body": [
        {
          "sentLen": [12, 12, 25]
        }
      ]
    }
  }
}
```

## Samples

```ts samples
/** This file path is /samples-dev/findSentenceBoundariesSample.ts */
import { TextTranslationClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to execute findSentenceBoundaries
 *
 * @summary execute findSentenceBoundaries
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function findSentenceBoundaries(): Promise<void> {
  const endpoint = "https://api.cognitive.microsofttranslator.com";
  const client = new TextTranslationClient(endpoint);
  const result = await client.findSentenceBoundaries(
    [{ text: "How are you? I am fine. What did you do today?" }],
    { language: "en", script: "Latn" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await findSentenceBoundaries();
}

main().catch(console.error);
```