// Licensed under the MIT License.

import { TodoContext } from "../../../api/todoContext.js";
import {
  createFileAttachment,
  createJsonAttachment,
  list,
} from "../../../api/todoItems/attachments/index.js";
import {
  TodoAttachment,
  FileAttachmentMultipartRequest,
} from "../../../models/models.js";
import { PagedAsyncIterableIterator } from "../../../static-helpers/pagingHelpers.js";
import {
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "../../../api/options.js";

/** Interface representing a TodoItemsAttachments operations. */
export interface TodoItemsAttachmentsOperations {
  createFileAttachment: (
    itemId: number,
    body: FileAttachmentMultipartRequest,
    options?: TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  ) => Promise<void>;
  createJsonAttachment: (
    itemId: number,
    contents: TodoAttachment,
    options?: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  ) => Promise<void>;
  list: (
    itemId: number,
    options?: TodoItemsAttachmentsListOptionalParams,
  ) => PagedAsyncIterableIterator<TodoAttachment>;
}

function _getTodoItemsAttachments(context: TodoContext) {
  return {
    createFileAttachment: (
      itemId: number,
      body: FileAttachmentMultipartRequest,
      options?: TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
    ) => createFileAttachment(context, itemId, body, options),
    createJsonAttachment: (
      itemId: number,
      contents: TodoAttachment,
      options?: TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
    ) => createJsonAttachment(context, itemId, contents, options),
    list: (itemId: number, options?: TodoItemsAttachmentsListOptionalParams) =>
      list(context, itemId, options),
  };
}

export function _getTodoItemsAttachmentsOperations(
  context: TodoContext,
): TodoItemsAttachmentsOperations {
  return {
    ..._getTodoItemsAttachments(context),
  };
}
