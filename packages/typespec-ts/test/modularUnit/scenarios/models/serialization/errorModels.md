# Not generate error models in MPG if it is not referenced

## TypeSpec

This is tsp definition.

```tsp
model Foo {
  name: string;
}
model ErrorDetail {
  /** A human readable message */
  message: string;
}
@error
model ApiError {
  /** A machine readable error code */
  code: string;
  detail?: ErrorDetail;
}
@get op bar(): Foo | ApiError;
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface Foo */
export interface Foo {
  name: string;
}

export function fooDeserializer(item: any): Foo {
  return {
    name: item["name"]
  };
}
```

# Generate error models in MPG if it is referenced

## TypeSpec

This is tsp definition.

```tsp
model Foo {
  name: string;
  options: ErrorDetail;
}
model ErrorDetail {
  /** A human readable message */
  message: string;
}
@error
model ApiError {
  /** A machine readable error code */
  code: string;
  detail?: ErrorDetail;
}
@get op bar(): Foo | ApiError;
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface Foo */
export interface Foo {
  name: string;
  options: ErrorDetail;
}

export function fooDeserializer(item: any): Foo {
  return {
    name: item["name"],
    options: errorDetailDeserializer(item["options"])
  };
}

/** model interface ErrorDetail */
export interface ErrorDetail {
  /** A human readable message */
  message: string;
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    message: item["message"]
  };
}
```
