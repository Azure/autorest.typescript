// Licensed under the MIT License.

import {
  TodoContext as Client,
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  TodoItemsAttachmentsCreateUrlAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "../../index.js";
import {
  TodoFileAttachment,
  todoFileAttachmentSerializer,
  TodoUrlAttachment,
  todoUrlAttachmentSerializer,
  PageTodoAttachment,
  pageTodoAttachmentDeserializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _listSend(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .get({ ...operationOptionsToRequestParameters(options) });
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

export async function list(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): Promise<PageTodoAttachment> {
  const result = await _listSend(context, itemId, options);
  return _listDeserialize(result);
}

export function _createUrlAttachmentSend(
  context: Client,
  itemId: number,
  contents: TodoUrlAttachment,
  options: TodoItemsAttachmentsCreateUrlAttachmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      body: todoUrlAttachmentSerializer(contents),
    });
}

export async function _createUrlAttachmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204", "404"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createUrlAttachment(
  context: Client,
  itemId: number,
  contents: TodoUrlAttachment,
  options: TodoItemsAttachmentsCreateUrlAttachmentOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _createUrlAttachmentSend(
    context,
    itemId,
    contents,
    options,
  );
  return _createUrlAttachmentDeserialize(result);
}

export function _createFileAttachmentSend(
  context: Client,
  itemId: number,
  contents: TodoFileAttachment,
  options: TodoItemsAttachmentsCreateFileAttachmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: todoFileAttachmentSerializer(contents),
    });
}

export async function _createFileAttachmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204", "404"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createFileAttachment(
  context: Client,
  itemId: number,
  contents: TodoFileAttachment,
  options: TodoItemsAttachmentsCreateFileAttachmentOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _createFileAttachmentSend(
    context,
    itemId,
    contents,
    options,
  );
  return _createFileAttachmentDeserialize(result);
}
