# Should generate deserializer for anonymous models
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
  op bar(): { @body body: SimpleModel };
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

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function simpleModelDeserializer(item: any): SimpleModel {
  return {
    prop: _simpleModelPropDeserializer(item["prop"]),
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/** model interface _SimpleModelProp */
export interface _SimpleModelProp {
  propA: string;
  propB: {
    propAA: string;
    propBB: boolean;
  };
}
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function _simpleModelPropDeserializer(item: any): _SimpleModelProp {
  return {
    propA: item["propA"],
    propB: _simpleModelPropPropBDeserializer(item["propB"]),
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/naming-convention */
/** model interface _SimpleModelPropPropB */
export interface _SimpleModelPropPropB {
  propAA: string;
  propBB: boolean;
}
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function _simpleModelPropPropBDeserializer(
  item: any,
): _SimpleModelPropPropB {
  return {
    propAA: item["propAA"],
    propBB: item["propBB"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
```