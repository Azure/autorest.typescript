// Licensed under the MIT license.

import { TodoContext } from "../../../api/todoContext.js";
import { TodoUrlAttachment, TodoAttachment } from "../../../models/models.js";
import {
  list,
  createUrlAttachment,
  createFileAttachment,
} from "../../../api/todoItems/attachments/index.js";
import {
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsAttachmentsCreateUrlAttachmentOptionalParams,
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
} from "../../../models/options.js";

/** Interface representing a TodoItemsAttachments operations. */
export interface TodoItemsAttachmentsOperations {
  list: (
    itemId: number,
    options?: TodoItemsAttachmentsListOptionalParams,
  ) => Promise<TodoAttachment[]>;
  createUrlAttachment: (
    itemId: number,
    contents: TodoUrlAttachment,
    options?: TodoItemsAttachmentsCreateUrlAttachmentOptionalParams,
  ) => Promise<void>;
  createFileAttachment: (
    itemId: number,
    contents: Uint8Array,
    options?: TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  ) => Promise<void>;
}

export function getTodoItemsAttachments(context: TodoContext) {
  return {
    list: (itemId: number, options?: TodoItemsAttachmentsListOptionalParams) =>
      list(context, itemId, options),
    createUrlAttachment: (
      itemId: number,
      contents: TodoUrlAttachment,
      options?: TodoItemsAttachmentsCreateUrlAttachmentOptionalParams,
    ) => createUrlAttachment(context, itemId, contents, options),
    createFileAttachment: (
      itemId: number,
      contents: Uint8Array,
      options?: TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
    ) => createFileAttachment(context, itemId, contents, options),
  };
}

export function getTodoItemsAttachmentsOperations(
  context: TodoContext,
): TodoItemsAttachmentsOperations {
  return {
    ...getTodoItemsAttachments(context),
  };
}
