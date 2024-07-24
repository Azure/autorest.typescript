// Licensed under the MIT license.

import { TodoAttachment } from "../../../models/models.js";
import {
  TodoContext as Client,
  TodoItemsAttachmentsCreateAttachment204Response,
  TodoItemsAttachmentsCreateAttachment400Response,
  TodoItemsAttachmentsCreateAttachment404Response,
  TodoItemsAttachmentsCreateAttachment500Response,
  TodoItemsAttachmentsList200Response,
  TodoItemsAttachmentsList400Response,
  TodoItemsAttachmentsList404Response,
  TodoItemsAttachmentsList500Response,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import {
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsAttachmentsCreateAttachmentOptionalParams,
} from "../../../models/options.js";

export function _listSend(
  context: Client,
  itemId: number,
  options: TodoItemsAttachmentsListOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | TodoItemsAttachmentsList200Response
  | TodoItemsAttachmentsList400Response
  | TodoItemsAttachmentsList404Response
  | TodoItemsAttachmentsList500Response
> {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result:
    | TodoItemsAttachmentsList200Response
    | TodoItemsAttachmentsList400Response
    | TodoItemsAttachmentsList404Response
    | TodoItemsAttachmentsList500Response,
): Promise<TodoAttachment[]> {
  if (result.status !== "404") {
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

export function _createAttachmentSend(
  context: Client,
  itemId: number,
  contents: TodoAttachment,
  options: TodoItemsAttachmentsCreateAttachmentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | TodoItemsAttachmentsCreateAttachment204Response
  | TodoItemsAttachmentsCreateAttachment400Response
  | TodoItemsAttachmentsCreateAttachment404Response
  | TodoItemsAttachmentsCreateAttachment500Response
> {
  return context
    .path("/items/{itemId}/attachments", itemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: contents,
    }) as StreamableMethod<
    | TodoItemsAttachmentsCreateAttachment204Response
    | TodoItemsAttachmentsCreateAttachment400Response
    | TodoItemsAttachmentsCreateAttachment404Response
    | TodoItemsAttachmentsCreateAttachment500Response
  >;
}

export async function _createAttachmentDeserialize(
  result:
    | TodoItemsAttachmentsCreateAttachment204Response
    | TodoItemsAttachmentsCreateAttachment400Response
    | TodoItemsAttachmentsCreateAttachment404Response
    | TodoItemsAttachmentsCreateAttachment500Response,
): Promise<void> {
  if (result.status !== "404") {
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
