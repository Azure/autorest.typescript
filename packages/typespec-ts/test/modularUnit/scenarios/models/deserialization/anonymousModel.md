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
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

export function simpleModelDeserializer(item: any): SimpleModel {
  return {
    prop: _simpleModelPropDeserializer(item["prop"]),
  };
}

/** model interface _SimpleModelProp */
export interface _SimpleModelProp {
  propA: string;
  propB: {
    propAA: string;
    propBB: boolean;
  };
}

export function _simpleModelPropDeserializer(item: any): _SimpleModelProp {
  return {
    propA: item["propA"],
    propB: _simpleModelPropPropBDeserializer(item["propB"]),
  };
}

/** model interface _SimpleModelPropPropB */
export interface _SimpleModelPropPropB {
  propAA: string;
  propBB: boolean;
}

export function _simpleModelPropPropBDeserializer(item: any): _SimpleModelPropPropB {
  return {
    propAA: item["propAA"],
    propBB: item["propBB"],
  };
}
```