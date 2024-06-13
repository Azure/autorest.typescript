// Licensed under the MIT license.

import { TodoContext } from "../../../api/todoContext.js";
import { TodoAttachment } from "../../../models/models.js";
import {
  list,
  createAttachment,
} from "../../../api/todoItems/attachments/index.js";
import {
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsAttachmentsCreateAttachmentOptionalParams,
} from "../../../models/options.js";

export interface TodoItemsAttachmentsOperations {
  list: (
    itemId: number,
    options?: TodoItemsAttachmentsListOptionalParams,
  ) => Promise<TodoAttachment[]>;
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
