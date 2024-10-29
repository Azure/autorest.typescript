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
/** model interface Foo */
export interface Foo {
  prop1: string;
}

export function fooSerializer(item: Foo): any {
  return { prop1: item["prop1"] };
}
```
