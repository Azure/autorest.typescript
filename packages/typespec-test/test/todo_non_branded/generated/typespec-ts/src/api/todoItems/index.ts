// Licensed under the MIT License.

import {
  TodoContext as Client,
  TodoItemsCreateFormOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsDeleteOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsListOptionalParams,
  TodoItemsUpdateOptionalParams,
} from "../index.js";
import {
  TodoPage,
  todoPageDeserializer,
  TodoItem,
  todoItemSerializer,
  TodoLabels,
  todoAttachmentArraySerializer,
  _createJsonResponseDeserializer,
  ToDoItemMultipartRequest,
  toDoItemMultipartRequestSerializer,
  _createFormResponseDeserializer,
  _getResponseDeserializer,
  TodoItemPatch,
  todoItemPatchSerializer,
  _updateResponseDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _$deleteSend(
  context: Client,
  id: number,
  options: TodoItemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items/{id}", id)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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

export function _updateSend(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items/{id}", id)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/merge-patch+json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: todoItemPatchSerializer(patch),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _updateResponseDeserializer(result.body);
}

export async function update(
  context: Client,
  id: number,
  patch: TodoItemPatch,
  options: TodoItemsUpdateOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const result = await _updateSend(context, id, patch, options);
  return _updateDeserialize(result);
}

export function _getSend(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items/{id}", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _getResponseDeserializer(result.body);
}

export async function get(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const result = await _getSend(context, id, options);
  return _getDeserialize(result);
}

export function _createFormSend(
  context: Client,
  body: ToDoItemMultipartRequest,
  options: TodoItemsCreateFormOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: toDoItemMultipartRequestSerializer(body),
    });
}

export async function _createFormDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _createFormResponseDeserializer(result.body);
}

export async function createForm(
  context: Client,
  body: ToDoItemMultipartRequest,
  options: TodoItemsCreateFormOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const result = await _createFormSend(context, body, options);
  return _createFormDeserialize(result);
}

export function _createJsonSend(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateJsonOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        item: todoItemSerializer(item),
        attachments: !options?.attachments
          ? options?.attachments
          : todoAttachmentArraySerializer(options?.attachments),
      },
    });
}

export async function _createJsonDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _createJsonResponseDeserializer(result.body);
}

export async function createJson(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateJsonOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  title: string;
  createdBy: number;
  assignedTo?: number;
  description?: string;
  status: "NotStarted" | "InProgress" | "Completed";
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  labels?: TodoLabels;
}> {
  const result = await _createJsonSend(context, item, options);
  return _createJsonDeserialize(result);
}

export function _listSend(
  context: Client,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { limit: options?.limit, offset: options?.offset },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoPage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return todoPageDeserializer(result.body);
}

export function list(
  context: Client,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TodoItem> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "items" },
  );
}
