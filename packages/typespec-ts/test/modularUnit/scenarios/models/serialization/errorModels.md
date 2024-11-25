# not generate error models in MPG if it is not referenced

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

model Standard4XXResponse extends ApiError {
  @minValue(400)
  @maxValue(499)
  @statusCode
  statusCode: int32;
}

model Standard5XXResponse extends ApiError {
  @minValue(500)
  @maxValue(599)
  @statusCode
  statusCode: int32;
}
alias WithStandardErrors= Standard4XXResponse | Standard5XXResponse;
@get op bar(): Foo | WithStandardErrors;
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

/** model interface Standard4XXResponse */
export interface Standard4XXResponse extends ApiError {}

export function standard4XXResponseDeserializer(
  item: any
): Standard4XXResponse {
  return {
    code: item["code"],
    message: item["message"]
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
    message: item["message"]
  };
}

/** model interface Standard5XXResponse */
export interface Standard5XXResponse extends ApiError {}

export function standard5XXResponseDeserializer(
  item: any
): Standard5XXResponse {
  return {
    code: item["code"],
    message: item["message"]
  };
}
```
