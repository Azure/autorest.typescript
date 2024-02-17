// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TodoPage,
  TodoItem,
  TodoUrlAttachment,
  TodoItemPatch,
} from "../../models/models.js";
import {
  TodoContext as Client,
  TodoItemsCreateForm200Response,
  TodoItemsCreateForm422Response,
  TodoItemsCreateJson200Response,
  TodoItemsCreateJson422Response,
  TodoItemsDeleteOperation200Response,
  TodoItemsDeleteOperation404Response,
  TodoItemsGet200Response,
  TodoItemsGet404Response,
  TodoItemsList200Response,
  TodoItemsUpdate200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  TodoItemsListOptions,
  TodoItemsCreateJsonOptions,
  TodoItemsCreateFormOptions,
  TodoItemsGetOptions,
  TodoItemsUpdateOptions,
  TodoItemsDeleteOperationOptions,
} from "../../models/options.js";

export function _todoItemsListSend(
  context: Client,
  limit: number,
  offset: number,
  options: TodoItemsListOptions = { requestOptions: {} }
): StreamableMethod<TodoItemsList200Response> {
  return context.path("/items").get({
    ...operationOptionsToRequestParameters(options),
    queryParameters: { limit: limit, offset: offset },
  });
}

export async function _todoItemsListDeserialize(
  result: TodoItemsList200Response
): Promise<TodoPage> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    items: result.body["items"].map((p) => ({
      id: p["id"],
      title: p["title"],
      createdBy: p["createdBy"],
      ownedBy: p["ownedBy"],
      description: p["description"],
      status: p["status"],
      createdAt: new Date(p["createdAt"]),
      updatedAt: new Date(p["updatedAt"]),
      completedAt: new Date(p["completedAt"]),
      labels: p["labels"],
    })),
    pagination: {
      pageSize: result.body.pagination["pageSize"],
      totalSize: result.body.pagination["totalSize"],
      prevLink: result.body.pagination["prevLink"],
      nextLink: result.body.pagination["nextLink"],
    },
  };
}

export async function todoItemsList(
  context: Client,
  limit: number,
  offset: number,
  options: TodoItemsListOptions = { requestOptions: {} }
): Promise<TodoPage> {
  const result = await _todoItemsListSend(context, limit, offset, options);
  return _todoItemsListDeserialize(result);
}

export function _todoItemsCreateJsonSend(
  context: Client,
  item: TodoItem,
  attachments: TodoUrlAttachment[],
  options: TodoItemsCreateJsonOptions = { requestOptions: {} }
): StreamableMethod<
  TodoItemsCreateJson200Response | TodoItemsCreateJson422Response
> {
  return context.path("/items").post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "application/json",
    body: {
      item: {
        id: item["id"],
        title: item["title"],
        ownedBy: item["ownedBy"],
        description: item["description"],
        status: item["status"],
        labels: item["labels"],
      },
      attachments: attachments.map((p) => ({
        description: p["description"],
        url: p["url"],
      })),
    },
  }) as StreamableMethod<
    TodoItemsCreateJson200Response | TodoItemsCreateJson422Response
  >;
}

export async function _todoItemsCreateJsonDeserialize(
  result: TodoItemsCreateJson200Response | TodoItemsCreateJson422Response
): Promise<TodoItem> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    title: result.body["title"],
    createdBy: result.body["createdBy"],
    ownedBy: result.body["ownedBy"],
    description: result.body["description"],
    status: result.body["status"],
    createdAt: new Date(result.body["createdAt"]),
    updatedAt: new Date(result.body["updatedAt"]),
    completedAt: new Date(result.body["completedAt"]),
    labels: result.body["labels"],
  };
}

export async function todoItemsCreateJson(
  context: Client,
  item: TodoItem,
  attachments: TodoUrlAttachment[],
  options: TodoItemsCreateJsonOptions = { requestOptions: {} }
): Promise<TodoItem> {
  const result = await _todoItemsCreateJsonSend(
    context,
    item,
    attachments,
    options
  );
  return _todoItemsCreateJsonDeserialize(result);
}

export function _todoItemsCreateFormSend(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateFormOptions = { requestOptions: {} }
): StreamableMethod<
  TodoItemsCreateForm200Response | TodoItemsCreateForm422Response
> {
  return context.path("/items").post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "multipart/form-data",
    body: {
      item: {
        id: item["id"],
        title: item["title"],
        ownedBy: item["ownedBy"],
        description: item["description"],
        status: item["status"],
        labels: item["labels"],
      },
      attachments: options?.attachments,
    },
  }) as StreamableMethod<
    TodoItemsCreateForm200Response | TodoItemsCreateForm422Response
  >;
}

export async function _todoItemsCreateFormDeserialize(
  result: TodoItemsCreateForm200Response | TodoItemsCreateForm422Response
): Promise<TodoItem> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    title: result.body["title"],
    createdBy: result.body["createdBy"],
    ownedBy: result.body["ownedBy"],
    description: result.body["description"],
    status: result.body["status"],
    createdAt: new Date(result.body["createdAt"]),
    updatedAt: new Date(result.body["updatedAt"]),
    completedAt: new Date(result.body["completedAt"]),
    labels: result.body["labels"],
  };
}

export async function todoItemsCreateForm(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateFormOptions = { requestOptions: {} }
): Promise<TodoItem> {
  const result = await _todoItemsCreateFormSend(context, item, options);
  return _todoItemsCreateFormDeserialize(result);
}

export function _todoItemsGetSend(
  context: Client,
  id: number,
  options: TodoItemsGetOptions = { requestOptions: {} }
): StreamableMethod<TodoItemsGet200Response | TodoItemsGet404Response> {
  return context
    .path("/items/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _todoItemsGetDeserialize(
  result: TodoItemsGet200Response | TodoItemsGet404Response
): Promise<TodoItem> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    title: result.body["title"],
    createdBy: result.body["createdBy"],
    ownedBy: result.body["ownedBy"],
    description: result.body["description"],
    status: result.body["status"],
    createdAt: new Date(result.body["createdAt"]),
    updatedAt: new Date(result.body["updatedAt"]),
    completedAt: new Date(result.body["completedAt"]),
    labels: result.body["labels"],
  };
}

export async function todoItemsGet(
  context: Client,
  id: number,
  options: TodoItemsGetOptions = { requestOptions: {} }
): Promise<TodoItem> {
  const result = await _todoItemsGetSend(context, id, options);
  return _todoItemsGetDeserialize(result);
}

export function _todoItemsUpdateSend(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptions = { requestOptions: {} }
): StreamableMethod<TodoItemsUpdate200Response> {
  return context.path("/items/{id}", id).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "application/merge-patch+json",
    body: {
      patch: {
        title: patch["title"],
        ownedBy: patch["ownedBy"],
        description: patch["description"],
        status: patch["status"],
      },
    },
  });
}

export async function _todoItemsUpdateDeserialize(
  result: TodoItemsUpdate200Response
): Promise<TodoItem> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    title: result.body["title"],
    createdBy: result.body["createdBy"],
    ownedBy: result.body["ownedBy"],
    description: result.body["description"],
    status: result.body["status"],
    createdAt: new Date(result.body["createdAt"]),
    updatedAt: new Date(result.body["updatedAt"]),
    completedAt: new Date(result.body["completedAt"]),
    labels: result.body["labels"],
  };
}

export async function todoItemsUpdate(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptions = { requestOptions: {} }
): Promise<TodoItem> {
  const result = await _todoItemsUpdateSend(context, id, patch, options);
  return _todoItemsUpdateDeserialize(result);
}

export function _todoItemsDeleteOperationSend(
  context: Client,
  id: number,
  options: TodoItemsDeleteOperationOptions = { requestOptions: {} }
): StreamableMethod<
  TodoItemsDeleteOperation200Response | TodoItemsDeleteOperation404Response
> {
  return context
    .path("/items/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _todoItemsDeleteOperationDeserialize(
  result:
    | TodoItemsDeleteOperation200Response
    | TodoItemsDeleteOperation404Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function todoItemsDeleteOperation(
  context: Client,
  id: number,
  options: TodoItemsDeleteOperationOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _todoItemsDeleteOperationSend(context, id, options);
  return _todoItemsDeleteOperationDeserialize(result);
}
