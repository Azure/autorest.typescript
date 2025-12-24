# Should generate query parameters with different collection format encoding

## TypeSpec

This tests various array query parameter encoding formats using @encode(ArrayEncoding.xxx) decorations.

```tsp
@route("/query")
interface QueryOperations {
  @get
  read(
    @query
    simpleArray: string[];

    @query
    simpleOptionalArray?: string[];
  ): void;

  @post
  create(
    @query
    @encode(ArrayEncoding.spaceDelimited)
    ssvArray: int32[];

    @query
    @encode(ArrayEncoding.spaceDelimited)
    ssvOptionalArray?: int32[];

    @query
    @encode(ArrayEncoding.pipeDelimited)
    pipeArray: string[];
  ): void;
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { buildPipeCollection } from "../static-helpers/serialization/build-pipe-collection.js";
import { buildSsvCollection } from "../static-helpers/serialization/build-ssv-collection.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CreateOptionalParams, ReadOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  ssvArray: number[],
  pipeArray: string[],
  options: CreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/query{?ssvArray,ssvOptionalArray,pipeArray}",
    {
      ssvArray: buildSsvCollection(
        ssvArray.map((p: any) => {
          return p;
        }),
      ),
      ssvOptionalArray: !options?.ssvOptionalArray
        ? options?.ssvOptionalArray
        : buildSsvCollection(
            options?.ssvOptionalArray.map((p: any) => {
              return p;
            }),
          ),
      pipeArray: buildPipeCollection(
        pipeArray.map((p: any) => {
          return p;
        }),
      ),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({ ...operationOptionsToRequestParameters(options) });
}

export async function _createDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function create(
  context: Client,
  ssvArray: number[],
  pipeArray: string[],
  options: CreateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createSend(context, ssvArray, pipeArray, options);
  return _createDeserialize(result);
}

export function _readSend(
  context: Client,
  simpleArray: string[],
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/query{?simpleArray,simpleOptionalArray}",
    {
      simpleArray: simpleArray.map((p: any) => {
        return p;
      }),
      simpleOptionalArray: !options?.simpleOptionalArray
        ? options?.simpleOptionalArray
        : options?.simpleOptionalArray.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
}

export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  simpleArray: string[],
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _readSend(context, simpleArray, options);
  return _readDeserialize(result);
}
```
