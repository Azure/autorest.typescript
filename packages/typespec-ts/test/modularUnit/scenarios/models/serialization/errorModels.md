# not generate error models in MPG if it is not referenced

## TypeSpec

This is tsp definition.

```tsp
@error
model ApiError {
  /** A machine readable error code */
  code: string;
  message: string;
}
@route("/serialize")
interface D {
  op bar(@body body: ApiError): void;
}
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  message: string;
}

export function apiErrorSerializer(item: ApiError): any {
  return { code: item["code"], message: item["message"] };
}
```
