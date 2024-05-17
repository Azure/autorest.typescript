// Licensed under the MIT license.

import { TodoUrlAttachment, TodoAttachment } from "../../../models/models.js";
import {
  TodoContext as Client,
  TodoItemsAttachmentsCreateFileAttachment200Response,
  TodoItemsAttachmentsCreateFileAttachment404Response,
  TodoItemsAttachmentsCreateUrlAttachment200Response,
  TodoItemsAttachmentsCreateUrlAttachment404Response,
  TodoItemsAttachmentsList200Response,
  TodoItemsAttachmentsList404Response,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
  uint8ArrayToString,
} from "@typespec/ts-http-runtime";
import {
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsAttachmentsCreateUrlAttachmentOptionalParams,
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
} from "../../../models/options.js";

export function _listSend(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): StreamableMethod<
  TodoItemsAttachmentsList200Response | TodoItemsAttachmentsList404Response
> {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result:
    | TodoItemsAttachmentsList200Response
    | TodoItemsAttachmentsList404Response,
): Promise<TodoAttachment[]> {
  if (result.status !== "200" && result.status !== "404") {
    throw createRestError(result);
  }

  return result.body;
}

export async function list(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): Promise<TodoAttachment[]> {
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
): StreamableMethod<
  | TodoItemsAttachmentsCreateUrlAttachment200Response
  | TodoItemsAttachmentsCreateUrlAttachment404Response
> {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      body: {
        contents: {
          description: contents["description"],
          url: contents["url"],
        },
      },
    }) as StreamableMethod<
    | TodoItemsAttachmentsCreateUrlAttachment200Response
    | TodoItemsAttachmentsCreateUrlAttachment404Response
  >;
}

export async function _createUrlAttachmentDeserialize(
  result:
    | TodoItemsAttachmentsCreateUrlAttachment200Response
    | TodoItemsAttachmentsCreateUrlAttachment404Response,
): Promise<void> {
  if (result.status !== "200" && result.status !== "404") {
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
  contents: Uint8Array,
  options: TodoItemsAttachmentsCreateFileAttachmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | TodoItemsAttachmentsCreateFileAttachment200Response
  | TodoItemsAttachmentsCreateFileAttachment404Response
> {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: { contents: uint8ArrayToString(contents, "base64") },
    }) as StreamableMethod<
    | TodoItemsAttachmentsCreateFileAttachment200Response
    | TodoItemsAttachmentsCreateFileAttachment404Response
  >;
}

export async function _createFileAttachmentDeserialize(
  result:
    | TodoItemsAttachmentsCreateFileAttachment200Response
    | TodoItemsAttachmentsCreateFileAttachment404Response,
): Promise<void> {
  if (result.status !== "200" && result.status !== "404") {
    throw createRestError(result);
  }

  return;
}

export async function createFileAttachment(
  context: Client,
  itemId: number,
  contents: Uint8Array,
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
