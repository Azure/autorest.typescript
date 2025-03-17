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

export function simpleModelSerializer(item: SimpleModel): any {
  return { ...item, propA: item["propA"], propB: item["propB"] };
}
```

# Should generate serializer for additional properties with `additionalProperties` property for non-legacy code

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<int32>;
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
compatibilityMode: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface SimpleModel */
export interface SimpleModel {
  propA: string;
  propB: string;
  /** Additional properties */
  additionalProperties?: Record<string, number>;
}

export function simpleModelSerializer(item: SimpleModel): any {
  return {
    ...item.additionalProperties,
    propA: item["propA"],
    propB: item["propB"]
  };
}
```

# Should treat a property named with `additionalProperties` as normal property

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
compatibilityMode: true
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

# Should generate serializer for additional properties with `additionalProperties` property for non-legacy code

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
    ...Record<int32>;
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
compatibilityMode: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface SimpleModel */
export interface SimpleModel {
  propA: string;
  propB: string;
  /** Additional properties */
  additionalProperties?: Record<string, number>;
}

export function simpleModelSerializer(item: SimpleModel): any {
  return {
    ...item.additionalProperties,
    propA: item["propA"],
    propB: item["propB"]
  };
}
```

# Should not generate `additionalProperties` property for non-legacy code if additional property is the same type

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
compatibilityMode: false
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
  return {
    ...item,
    propA: item["propA"],
    propB: item["propB"]
  };
}
```
