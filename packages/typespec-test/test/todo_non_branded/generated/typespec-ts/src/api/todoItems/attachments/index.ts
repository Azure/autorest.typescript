// Licensed under the MIT License.

import {
  TodoContext as Client,
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "../../index.js";
import {
  TodoAttachment,
  todoAttachmentSerializer,
  PageTodoAttachment,
  pageTodoAttachmentDeserializer,
  FileAttachmentMultipartRequest,
  fileAttachmentMultipartRequestSerializer,
} from "../../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../../static-helpers/pagingHelpers.js";
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
  options: TodoItemsAttachmentsCreateFileAttachmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: fileAttachmentMultipartRequestSerializer(body),
    });
}

export async function _createFileAttachmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createFileAttachment(
  context: Client,
  itemId: number,
  body: FileAttachmentMultipartRequest,
  options: TodoItemsAttachmentsCreateFileAttachmentOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _createFileAttachmentSend(
    context,
    itemId,
    body,
    options,
  );
  return _createFileAttachmentDeserialize(result);
}

export function _createJsonAttachmentSend(
  context: Client,
  itemId: number,
  contents: TodoAttachment,
  options: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: todoAttachmentSerializer(contents),
    });
}

export async function _createJsonAttachmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createJsonAttachment(
  context: Client,
  itemId: number,
  contents: TodoAttachment,
  options: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _createJsonAttachmentSend(
    context,
    itemId,
    contents,
    options,
  );
  return _createJsonAttachmentDeserialize(result);
}

export function _listSend(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items/{itemId}/attachments", itemId)
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
): Promise<PageTodoAttachment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return pageTodoAttachmentDeserializer(result.body);
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
