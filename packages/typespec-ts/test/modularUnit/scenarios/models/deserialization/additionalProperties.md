# Should generate deserializer for additional properties for legacy code

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
compatibility-mode: true
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
    propB: item["propB"]
  };
}
```

# Should generate deserializer for additional properties for legacy code

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<string>;
    propA: string;
    propB: string;
}

model EmptyModel {
    ...Record<string>;
}

model UnionModel {
    ...Record<string>;
    ...Record<int32>;
    propA: string;
    propB: string;
}

@route("/serialize")
interface D {
  @route("bar")
  op bar(): { @body body: SimpleModel };
  @route("baz")
  op baz(): { @body body: EmptyModel };
  @route("bas")
  op bas(): { @body body: UnionModel };
}
```

This is the tsp configuration.

```yaml
compatibility-mode: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
import { serializeRecord } from "../static-helpers/serialization/serialize-record.js";

/** model interface SimpleModel */
export interface SimpleModel {
  propA: string;
  propB: string;
  /** Additional properties */
  additionalProperties?: Record<string, string>;
}

export function simpleModelDeserializer(item: any): SimpleModel {
  return {
    additionalProperties: serializeRecord(item, ["propA", "propB"]),
    propA: item["propA"],
    propB: item["propB"]
  };
}

/** model interface EmptyModel */
export interface EmptyModel {
  /** Additional properties */
  additionalProperties?: Record<string, string>;
}

export function emptyModelDeserializer(item: any): EmptyModel {
  return {
    additionalProperties: serializeRecord(item)
  };
}

/** model interface UnionModel */
export interface UnionModel {
  propA: string;
  propB: string;
  /** Additional properties */
  additionalProperties?: Record<string, string | number>;
}

export function unionModelDeserializer(item: any): UnionModel {
  return {
    additionalProperties: serializeRecord(item, ["propA", "propB"]),
    propA: item["propA"],
    propB: item["propB"]
  };
}

/** Alias for _UnionModelAdditionalProperty */
export type _UnionModelAdditionalProperty = string | number;

export function _unionModelAdditionalPropertyDeserializer(
  item: any
): _UnionModelAdditionalProperty {
  return item;
}
```
