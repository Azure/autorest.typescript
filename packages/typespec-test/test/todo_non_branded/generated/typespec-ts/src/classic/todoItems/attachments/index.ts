// Licensed under the MIT License.

import {
  TodoItemsAttachmentsCreateAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "../../../api/options.js";
import { TodoContext } from "../../../api/todoContext.js";
import {
  createAttachment,
  list,
} from "../../../api/todoItems/attachments/index.js";
import { TodoAttachment } from "../../../models/models.js";
import { PagedAsyncIterableIterator } from "../../../static-helpers/pagingHelpers.js";

/** Interface representing a TodoItemsAttachments operations. */
export interface TodoItemsAttachmentsOperations {
  createAttachment: (
    itemId: number,
    contents: TodoAttachment,
    options?: TodoItemsAttachmentsCreateAttachmentOptionalParams,
  ) => Promise<void>;
  list: (
    itemId: number,
    options?: TodoItemsAttachmentsListOptionalParams,
  ) => PagedAsyncIterableIterator<TodoAttachment>;
}

export function getTodoItemsAttachments(context: TodoContext) {
  return {
    createAttachment: (
      itemId: number,
      contents: TodoAttachment,
      options?: TodoItemsAttachmentsCreateAttachmentOptionalParams,
    ) => createAttachment(context, itemId, contents, options),
    list: (itemId: number, options?: TodoItemsAttachmentsListOptionalParams) =>
      list(context, itemId, options),
  };
}

export function getTodoItemsAttachmentsOperations(
  context: TodoContext,
): TodoItemsAttachmentsOperations {
  return {
    ...getTodoItemsAttachments(context),
  };
}
