// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TodoContext } from "../../api/TodoContext.js";
import { TodoUrlAttachment, TodoAttachment } from "../../models/models.js";
import {
  attachmentsList,
  attachmentsCreateUrlAttachment,
  attachmentsCreateFileAttachment,
} from "../../api/attachments/index.js";
import {
  AttachmentsListOptions,
  AttachmentsCreateUrlAttachmentOptions,
  AttachmentsCreateFileAttachmentOptions,
} from "../../models/options.js";

export interface AttachmentsOperations {
  list: (
    itemId: number,
    options?: AttachmentsListOptions,
  ) => Promise<TodoAttachment[]>;
  createUrlAttachment: (
    itemId: number,
    contents: TodoUrlAttachment,
    options?: AttachmentsCreateUrlAttachmentOptions,
  ) => Promise<void>;
  createFileAttachment: (
    itemId: number,
    contents: Uint8Array,
    options?: AttachmentsCreateFileAttachmentOptions,
  ) => Promise<void>;
}

export function getAttachments(context: TodoContext) {
  return {
    list: (itemId: number, options?: AttachmentsListOptions) =>
      attachmentsList(context, itemId, options),
    createUrlAttachment: (
      itemId: number,
      contents: TodoUrlAttachment,
      options?: AttachmentsCreateUrlAttachmentOptions,
    ) => attachmentsCreateUrlAttachment(context, itemId, contents, options),
    createFileAttachment: (
      itemId: number,
      contents: Uint8Array,
      options?: AttachmentsCreateFileAttachmentOptions,
    ) => attachmentsCreateFileAttachment(context, itemId, contents, options),
  };
}

export function getAttachmentsOperations(
  context: TodoContext,
): AttachmentsOperations {
  return {
    ...getAttachments(context),
  };
}
