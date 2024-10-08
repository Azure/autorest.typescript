# skip: Should generate deserializer for additional properties
Will prompt all operations into top-level.

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

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface SimpleModel */
export interface SimpleModel {
  propA: string;
  propB: string;
}

export function simpleModelDeserializer(item: any): SimpleModel {
  return {
    propA: item["propA"],
    propB: item["propB"],
  };
}
```