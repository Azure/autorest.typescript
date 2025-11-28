# Should generate recursive read-only model even when parent has no deserializer

When a recursive model with all read-only properties is referenced by a parent model that only has a serializer (no deserializer), the code generator should still generate the recursive model interface instead of using a __PLACEHOLDER__ type.

## TypeSpec

```tsp
model CreateChildInfo {
  @visibility(Lifecycle.Read)
  type?: "TypeA" | "TypeB" | string;

  @visibility(Lifecycle.Read)
  id?: string;

  @visibility(Lifecycle.Read)
  name?: string;

  @visibility(Lifecycle.Read)
  children?: CreateChildInfo[];
}

/**
 * Request-only properties with read-only child reference.
 */
model CreatePropertiesModel {
  @visibility(Lifecycle.Read)
  tenantId?: string;

  displayName?: string;

  /**
   * Read-only property referencing the recursive read-only model.
   * Since parent only has serializer, this type might not be generated.
   */
  @visibility(Lifecycle.Read)
  childItems?: CreateChildInfo[];
}

/**
 * Request model - used ONLY for request body.
 */
model CreateRequest {
  @visibility(Lifecycle.Read)
  id?: string;

  name?: string;

  properties?: CreatePropertiesModel;
}

/**
 * Response model - DIFFERENT from request, has no CreateChildInfo reference.
 */
model ResponseModel {
  @visibility(Lifecycle.Read)
  id?: string;
  
  @visibility(Lifecycle.Read)
  name?: string;
}

@route("/items/{itemId}")
@put
op createItem(
  @path itemId: string,
  @body body: CreateRequest
): {
  @statusCode statusCode: 200;
  @body body: ResponseModel;
};
```

## Models

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Request model - used ONLY for request body. */
export interface CreateRequest {
  readonly id?: string;
  name?: string;
  properties?: CreatePropertiesModel;
}

export function createRequestSerializer(item: CreateRequest): any {
  return {
    name: item["name"],
    properties: !item["properties"]
      ? item["properties"]
      : createPropertiesModelSerializer(item["properties"]),
  };
}

/** Request-only properties with read-only child reference. */
export interface CreatePropertiesModel {
  readonly tenantId?: string;
  displayName?: string;
  /**
   * Read-only property referencing the recursive read-only model.
   * Since parent only has serializer, this type might not be generated.
   */
  readonly childItems?: CreateChildInfo[];
}

export function createPropertiesModelSerializer(
  item: CreatePropertiesModel,
): any {
  return { displayName: item["displayName"] };
}

/** model interface CreateChildInfo */
export interface CreateChildInfo {
  readonly type?: "TypeA" | "TypeB";
  readonly id?: string;
  readonly name?: string;
  readonly children?: CreateChildInfo[];
}

/** Response model - DIFFERENT from request, has no CreateChildInfo reference. */
export interface ResponseModel {
  readonly id?: string;
  readonly name?: string;
}

export function responseModelDeserializer(item: any): ResponseModel {
  return {
    id: item["id"],
    name: item["name"],
  };
}
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  CreateRequest,
  createRequestSerializer,
  ResponseModel,
  responseModelDeserializer,
} from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { CreateItemOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createItemSend(
  context: Client,
  itemId: string,
  body: CreateRequest,
  options: CreateItemOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/items/{itemId}",
    {
      itemId: itemId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createRequestSerializer(body),
    });
}

export async function _createItemDeserialize(
  result: PathUncheckedResponse,
): Promise<ResponseModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return responseModelDeserializer(result.body);
}

export async function createItem(
  context: Client,
  itemId: string,
  body: CreateRequest,
  options: CreateItemOptionalParams = { requestOptions: {} },
): Promise<ResponseModel> {
  const result = await _createItemSend(context, itemId, body, options);
  return _createItemDeserialize(result);
}
```
