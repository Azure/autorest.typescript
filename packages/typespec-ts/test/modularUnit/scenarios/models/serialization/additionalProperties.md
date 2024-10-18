# Should generate serializer for additional properties

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
  op bar(@body body: SimpleModel): void;
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

export function simpleModelSerializer(item: SimpleModel): any {
  return { ...item, propA: item["propA"], propB: item["propB"] };
}
```