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

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function fooDeserializer(item: any): Foo {
  return {
    name: item["name"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  detail?: ErrorDetail;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function apiErrorDeserializer(item: any): ApiError {
  return {
    code: item["code"],
    detail: !item["detail"]
      ? item["detail"]
      : errorDetailDeserializer(item["detail"]),
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface ErrorDetail */
export interface ErrorDetail {
  /** A human readable message */
  message: string;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    message: item["message"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
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

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function fooDeserializer(item: any): Foo {
  return {
    name: item["name"],
    options: errorDetailDeserializer(item["options"]),
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface ErrorDetail */
export interface ErrorDetail {
  /** A human readable message */
  message: string;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    message: item["message"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  detail?: ErrorDetail;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function apiErrorDeserializer(item: any): ApiError {
  return {
    code: item["code"],
    detail: !item["detail"]
      ? item["detail"]
      : errorDetailDeserializer(item["detail"]),
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
```
