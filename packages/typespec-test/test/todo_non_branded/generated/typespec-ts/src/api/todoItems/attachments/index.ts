// Licensed under the MIT License.

import {
  TodoContext as Client,
  TodoItemsAttachmentsCreateAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "../../index.js";
import {
  TodoAttachment,
  todoAttachmentSerializer,
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

export function _createAttachmentSend(
  context: Client,
  itemId: number,
  contents: TodoAttachment,
  options: TodoItemsAttachmentsCreateAttachmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: todoAttachmentSerializer(contents),
    });
}

export async function _createAttachmentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function createAttachment(
  context: Client,
  itemId: number,
  contents: TodoAttachment,
  options: TodoItemsAttachmentsCreateAttachmentOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _createAttachmentSend(
    context,
    itemId,
    contents,
    options,
  );
  return _createAttachmentDeserialize(result);
}
