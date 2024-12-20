// Licensed under the MIT License.

import {
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
} from "../../../api/options.js";
import { TodoContext } from "../../../api/todoContext.js";
import {
  list,
  createJsonAttachment,
  createFileAttachment,
} from "../../../api/todoItems/attachments/index.js";
import { TodoAttachment, PageTodoAttachment } from "../../../models/models.js";

/** Interface representing a TodoItemsAttachments operations. */
export interface TodoItemsAttachmentsOperations {
  list: (
    itemId: number,
    options?: TodoItemsAttachmentsListOptionalParams,
  ) => Promise<PageTodoAttachment>;
  createJsonAttachment: (
    itemId: number,
    contents: TodoAttachment,
    options?: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  ) => Promise<void>;
  createFileAttachment: (
    itemId: number,
    options?: TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  ) => Promise<void>;
}

export function getTodoItemsAttachments(context: TodoContext) {
  return {
    list: (itemId: number, options?: TodoItemsAttachmentsListOptionalParams) =>
      list(context, itemId, options),
    createJsonAttachment: (
      itemId: number,
      contents: TodoAttachment,
      options?: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
    ) => createJsonAttachment(context, itemId, contents, options),
    createFileAttachment: (
      itemId: number,
      options?: TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
    ) => createFileAttachment(context, itemId, options),
  };
}

export function getTodoItemsAttachmentsOperations(
  context: TodoContext,
): TodoItemsAttachmentsOperations {
  return {
    ...getTodoItemsAttachments(context),
  };
}
