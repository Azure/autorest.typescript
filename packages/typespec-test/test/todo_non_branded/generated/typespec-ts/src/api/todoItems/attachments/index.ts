// Licensed under the MIT License.

import {
  TodoContext as Client,
  TodoItemsAttachmentsCreateAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "../../index.js";
import {
  standard4XXResponseDeserializer,
  standard5XXResponseDeserializer,
  TodoAttachment,
  todoAttachmentSerializer,
  notFoundErrorResponseDeserializer,
  PageTodoAttachment,
  pageTodoAttachmentDeserializer,
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
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: todoAttachmentSerializer(contents),
    });
}

export async function _createAttachmentDeserialize(
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
