# Should generate serializer for anonymous models
Will prompt all operations into top-level.

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
  prop: {
    propA: string;
    propB: {
      propAA: string;
      propBB: boolean
    }
  }
}

@route("/serialize")
interface D {
  op bar(@body body: SimpleModel): void;
}
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface SimpleModel */
export interface SimpleModel {
  prop: {
    propA: string;
    propB: {
      propAA: string;
      propBB: boolean;
    };
  };
}

export function simpleModelSerializer(item: SimpleModel): any {
  return { prop: simpleModelPropSerializer(item["prop"]) };
}

/** model interface SimpleModelProp */
export interface SimpleModelProp {
  propA: string;
  propB: {
    propAA: string;
    propBB: boolean;
  };
}

export function simpleModelPropSerializer(item: SimpleModelProp): any {
  return {
    propA: item["propA"],
    propB: simpleModelPropPropBSerializer(item["propB"]),
  };
}

/** model interface SimpleModelPropPropB */
export interface SimpleModelPropPropB {
  propAA: string;
  propBB: boolean;
}

export function simpleModelPropPropBSerializer(
  item: SimpleModelPropPropB,
): any {
  return { propAA: item["propAA"], propBB: item["propBB"] };
}
```