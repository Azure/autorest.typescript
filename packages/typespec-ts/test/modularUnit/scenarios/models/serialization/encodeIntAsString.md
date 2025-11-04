# Should generate serializer for encode int as string

## TypeSpec

This is tsp definition.

```tsp
model Foo {
    @encode("string")
    prop1: int32;
}
op post(@body body: Foo): void;
```

This is the config to disable mustEmptyDiagnostic option.

```yaml
mustEmptyDiagnostic: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  prop1: string;
}

export function fooSerializer(item: Foo): any {
  return { prop1: item["prop1"] };
}
```
