// Licensed under the MIT License.

import {
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsAttachmentsCreateAttachmentOptionalParams,
} from "../../../api/options.js";
import { TodoContext } from "../../../api/todoContext.js";
import {
  list,
  createAttachment,
} from "../../../api/todoItems/attachments/index.js";
import { TodoAttachment, PageTodoAttachment } from "../../../models/models.js";

/** Interface representing a TodoItemsAttachments operations. */
export interface TodoItemsAttachmentsOperations {
  list: (
    itemId: number,
    options?: TodoItemsAttachmentsListOptionalParams,
  ) => Promise<PageTodoAttachment>;
  createAttachment: (
    itemId: number,
    contents: TodoAttachment,
    options?: TodoItemsAttachmentsCreateAttachmentOptionalParams,
  ) => Promise<void>;
}

export function getTodoItemsAttachments(context: TodoContext) {
  return {
    list: (itemId: number, options?: TodoItemsAttachmentsListOptionalParams) =>
      list(context, itemId, options),
    createAttachment: (
      itemId: number,
      contents: TodoAttachment,
      options?: TodoItemsAttachmentsCreateAttachmentOptionalParams,
    ) => createAttachment(context, itemId, contents, options),
  };
}

export function getTodoItemsAttachmentsOperations(
  context: TodoContext,
): TodoItemsAttachmentsOperations {
  return {
    ...getTodoItemsAttachments(context),
  };
}
