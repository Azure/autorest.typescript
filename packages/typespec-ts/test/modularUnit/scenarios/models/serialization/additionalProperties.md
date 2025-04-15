# Should generate serializer for additional properties with `additionalProperties` property for legacy code

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<int32>;
    ...Record<string>;
    propA: string;
    propB: string;
}

model ComplexModel {
    ...Record<SimpleModel>;
    propA: SimpleModel;
}

@route("/serialize")
interface D {
  @route("/simple")
  op bar(@body body: SimpleModel): void;
  @route("/complex")
  op baz(@body body: ComplexModel): void;
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
export interface SimpleModel extends Record<string, number | string> {
  propA: string;
  propB: string;
}

export function simpleModelSerializer(item: SimpleModel): any {
  return { ...item, propA: item["propA"], propB: item["propB"] };
}

/** Alias for _SimpleModelAdditionalProperty */
export type _SimpleModelAdditionalProperty = number | string;

export function _simpleModelAdditionalPropertySerializer(
  item: _SimpleModelAdditionalProperty
): any {
  return item;
}

/** model interface ComplexModel */
export interface ComplexModel extends Record<string, SimpleModel> {
  propA: SimpleModel;
}

export function complexModelSerializer(item: ComplexModel): any {
  return { ...item, propA: simpleModelSerializer(item["propA"]) };
}
```

# Should treat a property named with `additionalProperties` as normal property with legacy code

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    additionalProperties: string;
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
compatibility-mode: true
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface SimpleModel */
export interface SimpleModel {
  additionalProperties: string;
  propA: string;
  propB: string;
}

export function simpleModelSerializer(item: SimpleModel): any {
  return {
    additionalProperties: item["additionalProperties"],
    propA: item["propA"],
    propB: item["propB"]
  };
}
```

# Should generate `additionalProperties` bag for non-legacy code if additional property is the same type

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<string>;
    propA: string;
    propB: string;
}

model ComplexModel {
    ...Record<SimpleModel>;
    propA: SimpleModel;
}

@route("/serialize")
interface D {
  @route("/simple")
  op bar(@body body: SimpleModel): void;
  @route("/complex")
  op baz(@body body: ComplexModel): void;
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

export function simpleModelSerializer(item: SimpleModel): any {
  return {
    ...serializeRecord(item.additionalProperties),
    propA: item["propA"],
    propB: item["propB"]
  };
}

/** model interface ComplexModel */
export interface ComplexModel {
  propA: SimpleModel;
  /** Additional properties */
  additionalProperties?: Record<string, SimpleModel>;
}

export function complexModelSerializer(item: ComplexModel): any {
  return {
    ...serializeRecord(
      item.additionalProperties,
      undefined,
      simpleModelSerializer
    ),
    propA: simpleModelSerializer(item["propA"])
  };
}
```

// TODO: enable this case once confirmed https://github.com/microsoft/typespec/issues/6983

# skip: Should generate `additionalProperties` bag for non-legacy code if additional property is overrode

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<string>;
}

model ComplexModel {
    ...Record<SimpleModel>;
}

@route("/serialize")
interface D {
  @route("/simple")
  op bar(@body body: SimpleModel): void;
  @route("/complex")
  op baz(@body body: ComplexModel): void;
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
  /** Additional properties */
  additionalProperties?: Record<string, string>;
}

export function simpleModelSerializer(item: SimpleModel): any {
  return { ...serializeRecord(item.additionalProperties) };
}

/** model interface ComplexModel */
export interface ComplexModel {
  /** Additional properties */
  additionalProperties?: Record<string, SimpleModel>;
}

export function complexModelSerializer(item: ComplexModel): any {
  return {
    ...serializeRecord(
      item.additionalProperties,
      undefined,
      simpleModelSerializer
    )
  };
}
```

# Should generate union `additionalProperties` bag for non-legacy code if multiple additional properties

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<string>;
    ...Record<int32>;
    ...Record<boolean>;
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
  additionalProperties?: Record<string, string | number | boolean>;
}

export function simpleModelSerializer(item: SimpleModel): any {
  return {
    ...serializeRecord(
      item.additionalProperties,
      undefined,
      _simpleModelAdditionalPropertySerializer
    ),
    propA: item["propA"],
    propB: item["propB"]
  };
}

/** Alias for _SimpleModelAdditionalProperty */
export type _SimpleModelAdditionalProperty = string | number | boolean;

export function _simpleModelAdditionalPropertySerializer(
  item: _SimpleModelAdditionalProperty
): any {
  return item;
}
```

# Should generate `additionalProperties` bag if we have another same name property as `additionalProperties`

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<string>;
    additionalProperties: Record<int32>;
    propA: string;
    propB: string;
}

model BarModel {
  additionalProperties: Record<int32>;
}

model FooModel extends BarModel{
    ...Record<string>;
    propA: string;
    propB: string;
}

@route("/serialize")
interface D {
  @route("bar")
  op bar(@body body: SimpleModel): void;
  @route("foo")
  op foo(@body body: FooModel): void;
}
```

This is the tsp configuration.

```yaml
compatibility-mode: false
mustEmptyDiagnostic: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
import { serializeRecord } from "../static-helpers/serialization/serialize-record.js";

/** model interface SimpleModel */
export interface SimpleModel {
  additionalProperties: Record<string, number>;
  propA: string;
  propB: string;
  /** Additional properties */
  additionalPropertiesBag?: Record<string, string>;
}

export function simpleModelSerializer(item: SimpleModel): any {
  return {
    ...serializeRecord(item.additionalPropertiesBag),
    additionalProperties: item["additionalProperties"],
    propA: item["propA"],
    propB: item["propB"]
  };
}

/** model interface FooModel */
export interface FooModel extends BarModel {
  propA: string;
  propB: string;
  /** Additional properties */
  additionalPropertiesBag?: Record<string, string>;
}

export function fooModelSerializer(item: FooModel): any {
  return {
    ...serializeRecord(item.additionalPropertiesBag),
    additionalProperties: item["additionalProperties"],
    propA: item["propA"],
    propB: item["propB"]
  };
}

/** model interface BarModel */
export interface BarModel {
  additionalProperties: Record<string, number>;
}

export function barModelSerializer(item: BarModel): any {
  return { additionalProperties: item["additionalProperties"] };
}
```
