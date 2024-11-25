# only: not generate error models in MPG if it is not referenced

## TypeSpec

This is tsp definition.

```tsp
model Foo {
  name: string;
}

@error
model ApiError {
  /** A machine readable error code */
  code: string;

  /** A human readable message */
  message: string;
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
    name: item["name"],
  };
}

/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  /** A human readable message */
  message: string;
}

export function apiErrorDeserializer(item: any): ApiError {
  return {
    code: item["code"],
    message: item["message"],
  };
}
```
