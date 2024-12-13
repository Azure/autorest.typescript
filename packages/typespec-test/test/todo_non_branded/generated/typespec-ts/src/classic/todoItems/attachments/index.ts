// Licensed under the MIT License.

import {
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsAttachmentsCreateUrlAttachmentOptionalParams,
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
} from "../../../api/options.js";
import { TodoContext } from "../../../api/todoContext.js";
import {
  list,
  createUrlAttachment,
  createFileAttachment,
} from "../../../api/todoItems/attachments/index.js";
import {
  TodoFileAttachment,
  TodoUrlAttachment,
  PageTodoAttachment,
} from "../../../models/models.js";

/** Interface representing a TodoItemsAttachments operations. */
export interface TodoItemsAttachmentsOperations {
  list: (
    itemId: number,
    options?: TodoItemsAttachmentsListOptionalParams,
  ) => Promise<PageTodoAttachment>;
  createUrlAttachment: (
    itemId: number,
    contents: TodoUrlAttachment,
    options?: TodoItemsAttachmentsCreateUrlAttachmentOptionalParams,
  ) => Promise<void>;
  createFileAttachment: (
    itemId: number,
    contents: TodoFileAttachment,
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
      contents: TodoFileAttachment,
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
