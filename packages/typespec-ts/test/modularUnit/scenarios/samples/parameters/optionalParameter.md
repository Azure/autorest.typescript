# With default values parameters should not appear as standalone parameters in sample code

## TypeSpec

```typespec
import "@typespec/http";
import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;

@service(#{
  title: "Sample Service",
})
@server(
  "{endpoint}/{storage}",
  "Sample endpoint",
  {
    @doc("The endpoint URL")
    endpoint: string = "https://example.com",
    storage: string,
  }
)
namespace SampleService;

model Person {
  id: string;
  name: string;
}

@route("/persons")
interface Persons {
  @get
  list(
    @query start?: string,
    @query top?: int32,
  ): Person[];
}
```

## Example

```json
{
  "title": "List persons",
  "operationId": "Persons_List",
  "parameters": {
    "start": "00000000-0000-0000-0000-000000000000",
    "top": 20
  },
  "responses": {
    "200": {
      "body": [
        {
          "id": "person1",
          "name": "John Doe"
        }
      ]
    }
  }
}
```

## Generated Sample

```ts samples
```
