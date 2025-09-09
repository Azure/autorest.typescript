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
  return { prop: _simpleModelPropSerializer(item["prop"]) };
}

/** model interface _SimpleModelProp */
export interface _SimpleModelProp {
  propA: string;
  propB: {
    propAA: string;
    propBB: boolean;
  };
}

export function _simpleModelPropSerializer(item: _SimpleModelProp): any {
  return {
    propA: item["propA"],
    propB: _simpleModelPropPropBSerializer(item["propB"]),
  };
}

/** model interface _SimpleModelPropPropB */
export interface _SimpleModelPropPropB {
  propAA: string;
  propBB: boolean;
}

export function _simpleModelPropPropBSerializer(
  item: _SimpleModelPropPropB,
): any {
  return { propAA: item["propAA"], propBB: item["propBB"] };
}
```