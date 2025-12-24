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
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  name: string;
}

export function fooDeserializer(item: any): Foo {
  return {
    name: item["name"],
  };
}

/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  detail?: ErrorDetail;
}

export function apiErrorDeserializer(item: any): ApiError {
  return {
    code: item["code"],
    detail: !item["detail"] ? item["detail"] : errorDetailDeserializer(item["detail"]),
  };
}

/** model interface ErrorDetail */
export interface ErrorDetail {
  /** A human readable message */
  message: string;
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    message: item["message"],
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
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  name: string;
  options: ErrorDetail;
}

export function fooDeserializer(item: any): Foo {
  return {
    name: item["name"],
    options: errorDetailDeserializer(item["options"]),
  };
}

/** model interface ErrorDetail */
export interface ErrorDetail {
  /** A human readable message */
  message: string;
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    message: item["message"],
  };
}

/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  detail?: ErrorDetail;
}

export function apiErrorDeserializer(item: any): ApiError {
  return {
    code: item["code"],
    detail: !item["detail"] ? item["detail"] : errorDetailDeserializer(item["detail"]),
  };
}
```
