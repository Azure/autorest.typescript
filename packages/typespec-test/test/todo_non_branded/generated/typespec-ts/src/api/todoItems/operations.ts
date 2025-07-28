// Licensed under the MIT License.

import { TodoContext as Client } from "../index.js";
import {
  standard4XXResponseDeserializer,
  standard5XXResponseDeserializer,
  TodoItem,
  todoItemSerializer,
  todoItemDeserializer,
  todoAttachmentArraySerializer,
  ToDoItemMultipartRequest,
  toDoItemMultipartRequestSerializer,
} from "../../models/models.js";
import {
  _TodoPage,
  _todoPageDeserializer,
  invalidTodoItemDeserializer,
  notFoundErrorResponseDeserializer,
  TodoItemPatch,
  todoItemPatchSerializer,
} from "../../models/todoItems/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsListOptionalParams,
} from "./options.js";
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
  const path = expandUrlTemplate(
    "/items/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
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
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode === 404) {
      error.details = notFoundErrorResponseDeserializer(result.body);
    } else if (statusCode >= 400 && statusCode <= 499) {
      error.details = standard4XXResponseDeserializer(result.body);
    } else if (statusCode >= 500 && statusCode <= 599) {
      error.details = standard5XXResponseDeserializer(result.body);
    }
    throw error;
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
  const path = expandUrlTemplate(
    "/items/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
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
): Promise<TodoItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return todoItemDeserializer(result.body);
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

export function _getSend(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/items/{id}",
    {
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode === 404) {
      error.details = notFoundErrorResponseDeserializer(result.body);
    }
    throw error;
  }

  return todoItemDeserializer(result.body);
}

export async function get(
  context: Client,
  id: number,
  options: TodoItemsGetOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
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
): Promise<TodoItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode === 422) {
      error.details = invalidTodoItemDeserializer(result.body);
    } else if (statusCode >= 400 && statusCode <= 499) {
      error.details = standard4XXResponseDeserializer(result.body);
    } else if (statusCode >= 500 && statusCode <= 599) {
      error.details = standard5XXResponseDeserializer(result.body);
    }
    throw error;
  }

  return todoItemDeserializer(result.body);
}

export async function createForm(
  context: Client,
  body: ToDoItemMultipartRequest,
  options: TodoItemsCreateFormOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
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
        attachments: options?.attachments
          ? todoAttachmentArraySerializer(options?.attachments)
          : options?.attachments,
      },
    });
}

export async function _createJsonDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode === 422) {
      error.details = invalidTodoItemDeserializer(result.body);
    } else if (statusCode >= 400 && statusCode <= 499) {
      error.details = standard4XXResponseDeserializer(result.body);
    } else if (statusCode >= 500 && statusCode <= 599) {
      error.details = standard5XXResponseDeserializer(result.body);
    }
    throw error;
  }

  return todoItemDeserializer(result.body);
}

export async function createJson(
  context: Client,
  item: TodoItem,
  options: TodoItemsCreateJsonOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
  const result = await _createJsonSend(context, item, options);
  return _createJsonDeserialize(result);
}

export function _listSend(
  context: Client,
  options: TodoItemsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/items{?limit,offset}",
    {
      limit: options?.limit,
      offset: options?.offset,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_TodoPage> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode >= 400 && statusCode <= 499) {
      error.details = standard4XXResponseDeserializer(result.body);
    } else if (statusCode >= 500 && statusCode <= 599) {
      error.details = standard5XXResponseDeserializer(result.body);
    }
    throw error;
  }

  return _todoPageDeserializer(result.body);
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
    { itemName: "items", nextLinkName: "nextLink" },
  );
}
