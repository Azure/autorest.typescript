# Should return {} in serializer when model has only readonly and metadata properties

When a model contains only readonly properties (`@visibility(Lifecycle.Read)`) and
metadata properties (`@header`, `@query`), all properties are filtered out during
serialization. The serializer should use `_item` to avoid unused parameter errors and return `{}`.

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/versioning";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using TypeSpec.Versioning;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Test Service"
})
namespace TestService;

model ReadonlyAndMetadataModel {
  @visibility(Lifecycle.Read)
  id?: string;
  @header("x-request-id")
  requestId: string;
  @query
  filter: string;
}

@route("/test")
@post
op testOp(@bodyRoot body: ReadonlyAndMetadataModel): void;
```

The config would be like:

```yaml
needTCGC: true
withRawContent: true
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface ReadonlyAndMetadataModel */
export interface ReadonlyAndMetadataModel {
  readonly id?: string;
  requestId: string;
  filter: string;
}

export function readonlyAndMetadataModelSerializer(_item: ReadonlyAndMetadataModel): any {
  return {};
}
```
