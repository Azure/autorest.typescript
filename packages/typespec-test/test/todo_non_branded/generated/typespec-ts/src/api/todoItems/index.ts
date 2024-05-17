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
  TodoItemsDelete200Response,
  TodoItemsDelete404Response,
  TodoItemsGet200Response,
  TodoItemsGet404Response,
  TodoItemsList200Response,
  TodoItemsUpdate200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import {
  TodoItemsListOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsDeleteOptionalParams,
} from "../../models/options.js";

export function _listSend(
  context: Client,
  limit: number,
  offset: number,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): StreamableMethod<TodoItemsList200Response> {
  return context
    .path("/items")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { limit: limit, offset: offset },
    });
}

export async function _listDeserialize(
  result: TodoItemsList200Response,
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

export async function list(
  context: Client,
  limit: number,
  offset: number,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): Promise<TodoPage> {
  const result = await _listSend(context, limit, offset, options);
  return _listDeserialize(result);
}

export function _createJsonSend(
  context: Client,
  item: TodoItem,
  attachments: TodoUrlAttachment[],
  options: TodoItemsCreateJsonOptionalParams = { requestOptions: {} },
): StreamableMethod<
  TodoItemsCreateJson200Response | TodoItemsCreateJson422Response
> {
  return context
    .path("/items")
    .post({
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

export async function _createJsonDeserialize(
  result: TodoItemsCreateJson200Response | TodoItemsCreateJson422Response,
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

export async function createJson(
  context: Client,
  item: TodoItem,
  attachments: TodoUrlAttachment[],
  options: TodoItemsCreateJsonOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
  const result = await _createJsonSend(context, item, attachments, options);
  return _createJsonDeserialize(result);
}

export function _createFormSend(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateFormOptionalParams = { requestOptions: {} },
): StreamableMethod<
  TodoItemsCreateForm200Response | TodoItemsCreateForm422Response
> {
  return context
    .path("/items")
    .post({
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

export async function _createFormDeserialize(
  result: TodoItemsCreateForm200Response | TodoItemsCreateForm422Response,
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

export async function createForm(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateFormOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
  const result = await _createFormSend(context, item, options);
  return _createFormDeserialize(result);
}

export function _getSend(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<TodoItemsGet200Response | TodoItemsGet404Response> {
  return context
    .path("/items/{id}", id)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: TodoItemsGet200Response | TodoItemsGet404Response,
): Promise<TodoItem> {
  if (result.status !== "200" && result.status !== "404") {
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

export async function get(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<TodoItemsUpdate200Response> {
  return context
    .path("/items/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ?? "application/merge-patch+json",
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

export async function _updateDeserialize(
  result: TodoItemsUpdate200Response,
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

export async function update(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
  const result = await _updateSend(context, id, patch, options);
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  id: number,
  options: TodoItemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<TodoItemsDelete200Response | TodoItemsDelete404Response> {
  return context
    .path("/items/{id}", id)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: TodoItemsDelete200Response | TodoItemsDelete404Response,
): Promise<void> {
  if (result.status !== "200" && result.status !== "404") {
    throw createRestError(result);
  }

  return;
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  id: number,
  options: TodoItemsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, id, options);
  return _$deleteDeserialize(result);
}
