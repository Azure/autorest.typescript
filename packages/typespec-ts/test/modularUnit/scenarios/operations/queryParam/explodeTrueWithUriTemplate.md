# Should generate query parameter with start(\*) character

## TypeSpec

This is tsp definition.

```tsp
@route("primitive?fixed=true{&param*}")
op primitive(param: string): void;

@route("array?fixed=true{&param*}")
op array(param: string[]): void;

@route("record?fixed=true{&param*}")
op record(param: Record<int32>): void;
```

## Provide generated operations to call rest-level methods

## Operations

Should enable URI template parse for parameters:

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _primitiveSend(
  context: Client,
  param: string,
  options: PrimitiveOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const pathParser = __PLACEHOLDER_o14__("/primitive?fixed=true{&param*}");
  const path = pathParser.expand({
    param: param
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _primitiveDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function primitive(
  context: Client,
  param: string,
  options: PrimitiveOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _primitiveSend(context, param, options);
  return _primitiveDeserialize(result);
}

export function _arraySend(
  context: Client,
  param: string[],
  options: ArrayOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const pathParser = __PLACEHOLDER_o14__("/array?fixed=true{&param*}");
  const path = pathParser.expand({
    param: param.map((p: any) => {
      return p;
    })
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _arrayDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function array(
  context: Client,
  param: string[],
  options: ArrayOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _arraySend(context, param, options);
  return _arrayDeserialize(result);
}

export function _recordSend(
  context: Client,
  param: Record<string, number>,
  options: RecordOptionalParams = { requestOptions: {} }
): StreamableMethod {
  const pathParser = __PLACEHOLDER_o14__("/record?fixed=true{&param*}");
  const path = pathParser.expand({
    param: param
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _recordDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function record(
  context: Client,
  param: Record<string, number>,
  options: RecordOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _recordSend(context, param, options);
  return _recordDeserialize(result);
}
```