# Should generate deserializer for additional properties

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<string>;
    propA: string;
    propB: string;
}

@route("/serialize")
interface D {
  op bar(): { @body body: SimpleModel };
}
```

This is the tsp configuration.

```yaml
compatibilityMode: true
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface SimpleModel */
export interface SimpleModel extends Record<string, string> {
  propA: string;
  propB: string;
}

export function simpleModelDeserializer(item: any): SimpleModel {
  return {
    ...item,
    propA: item["propA"],
    propB: item["propB"],
  };
}
```