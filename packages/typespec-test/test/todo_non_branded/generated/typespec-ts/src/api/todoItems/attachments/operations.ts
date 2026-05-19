// Licensed under the MIT License.

import { TodoContext as Client } from "../../index.js";
import {
  standard4XXResponseDeserializer,
  standard5XXResponseDeserializer,
  TodoAttachment,
  todoAttachmentSerializer,
  FileAttachmentMultipartRequest,
  fileAttachmentMultipartRequestSerializer,
} from "../../../models/models.js";
import {
  notFoundErrorResponseDeserializer,
  _PageTodoAttachment,
  _pageTodoAttachmentDeserializer,
} from "../../../models/todoItems/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createFileAttachmentSend(
  context: Client,
  itemId: number,
  body: FileAttachmentMultipartRequest,
  options: TodoItemsAttachmentsCreateFileAttachmentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/items/{itemId}/attachments",
    {
      itemId: itemId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      body: fileAttachmentMultipartRequestSerializer(body),
    });
}

export async function _createFileAttachmentDeserialize(
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

export async function createFileAttachment(
  context: Client,
  itemId: number,
  body: FileAttachmentMultipartRequest,
  options: TodoItemsAttachmentsCreateFileAttachmentOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createFileAttachmentSend(context, itemId, body, options);
  return _createFileAttachmentDeserialize(result);
}

export function _createJsonAttachmentSend(
  context: Client,
  itemId: number,
  contents: TodoAttachment,
  options: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/items/{itemId}/attachments",
    {
      itemId: itemId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: todoAttachmentSerializer(contents),
    });
}

export async function _createJsonAttachmentDeserialize(
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

export async function createJsonAttachment(
  context: Client,
  itemId: number,
  contents: TodoAttachment,
  options: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createJsonAttachmentSend(context, itemId, contents, options);
  return _createJsonAttachmentDeserialize(result);
}

export function _listSend(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/items/{itemId}/attachments",
    {
      itemId: itemId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_PageTodoAttachment> {
  const expectedStatuses = ["200"];
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

  return _pageTodoAttachmentDeserializer(result.body);
}

export function list(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<TodoAttachment> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, itemId, options),
    _listDeserialize,
    ["200"],
    { itemName: "items" },
  );
}
