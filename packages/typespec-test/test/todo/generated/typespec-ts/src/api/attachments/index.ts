// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TodoUrlAttachment, TodoAttachment } from "../../models/models.js";
import {
  TodoContext as Client,
  TodoItemsAttachmentsCreateFileAttachment200Response,
  TodoItemsAttachmentsCreateFileAttachment404Response,
  TodoItemsAttachmentsCreateUrlAttachment200Response,
  TodoItemsAttachmentsCreateUrlAttachment404Response,
  TodoItemsAttachmentsList200Response,
  TodoItemsAttachmentsList404Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  AttachmentsListOptions,
  AttachmentsCreateUrlAttachmentOptions,
  AttachmentsCreateFileAttachmentOptions,
} from "../../models/options.js";

export function _attachmentsListSend(
  context: Client,
  itemId: number,
  options: AttachmentsListOptions = { requestOptions: {} }
): StreamableMethod<
  TodoItemsAttachmentsList200Response | TodoItemsAttachmentsList404Response
> {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _attachmentsListDeserialize(
  result:
    | TodoItemsAttachmentsList200Response
    | TodoItemsAttachmentsList404Response
): Promise<TodoAttachment[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function attachmentsList(
  context: Client,
  itemId: number,
  options: AttachmentsListOptions = { requestOptions: {} }
): Promise<TodoAttachment[]> {
  const result = await _attachmentsListSend(context, itemId, options);
  return _attachmentsListDeserialize(result);
}

export function _attachmentsCreateUrlAttachmentSend(
  context: Client,
  itemId: number,
  contents: TodoUrlAttachment,
  options: AttachmentsCreateUrlAttachmentOptions = { requestOptions: {} }
): StreamableMethod<
  | TodoItemsAttachmentsCreateUrlAttachment200Response
  | TodoItemsAttachmentsCreateUrlAttachment404Response
> {
  return context.path("/items/{itemId}/attachments", itemId).post({
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

export async function _attachmentsCreateUrlAttachmentDeserialize(
  result:
    | TodoItemsAttachmentsCreateUrlAttachment200Response
    | TodoItemsAttachmentsCreateUrlAttachment404Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function attachmentsCreateUrlAttachment(
  context: Client,
  itemId: number,
  contents: TodoUrlAttachment,
  options: AttachmentsCreateUrlAttachmentOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _attachmentsCreateUrlAttachmentSend(
    context,
    itemId,
    contents,
    options
  );
  return _attachmentsCreateUrlAttachmentDeserialize(result);
}

export function _attachmentsCreateFileAttachmentSend(
  context: Client,
  itemId: number,
  contents: Uint8Array,
  options: AttachmentsCreateFileAttachmentOptions = { requestOptions: {} }
): StreamableMethod<
  | TodoItemsAttachmentsCreateFileAttachment200Response
  | TodoItemsAttachmentsCreateFileAttachment404Response
> {
  return context.path("/items/{itemId}/attachments", itemId).post({
    ...operationOptionsToRequestParameters(options),
    contentType: (options.contentType as any) ?? "multipart/form-data",
    body: { contents: uint8ArrayToString(contents, "base64") },
  }) as StreamableMethod<
    | TodoItemsAttachmentsCreateFileAttachment200Response
    | TodoItemsAttachmentsCreateFileAttachment404Response
  >;
}

export async function _attachmentsCreateFileAttachmentDeserialize(
  result:
    | TodoItemsAttachmentsCreateFileAttachment200Response
    | TodoItemsAttachmentsCreateFileAttachment404Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function attachmentsCreateFileAttachment(
  context: Client,
  itemId: number,
  contents: Uint8Array,
  options: AttachmentsCreateFileAttachmentOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _attachmentsCreateFileAttachmentSend(
    context,
    itemId,
    contents,
    options
  );
  return _attachmentsCreateFileAttachmentDeserialize(result);
}
