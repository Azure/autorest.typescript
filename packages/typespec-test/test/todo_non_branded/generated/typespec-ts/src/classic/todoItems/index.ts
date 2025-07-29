// Licensed under the MIT License.

import { TodoContext } from "../../api/todoContext.js";
import {
  $delete,
  update,
  get,
  createForm,
  createJson,
  list,
} from "../../api/todoItems/operations.js";
import {
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsListOptionalParams,
} from "../../api/todoItems/options.js";
import { TodoItem, ToDoItemMultipartRequest } from "../../models/models.js";
import { TodoItemPatch } from "../../models/todoItems/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  TodoItemsAttachmentsOperations,
  _getTodoItemsAttachmentsOperations,
} from "./attachments/index.js";

/** Interface representing a TodoItems operations. */
export interface TodoItemsOperations {
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    id: number,
    options?: TodoItemsDeleteOptionalParams,
  ) => Promise<void>;
  update: (
    id: number,
    patch: TodoItemPatch,
    options?: TodoItemsUpdateOptionalParams,
  ) => Promise<TodoItem>;
  get: (id: number, options?: TodoItemsGetOptionalParams) => Promise<TodoItem>;
  createForm: (
    body: ToDoItemMultipartRequest,
    options?: TodoItemsCreateFormOptionalParams,
  ) => Promise<TodoItem>;
  createJson: (
    item: TodoItem,
    options?: TodoItemsCreateJsonOptionalParams,
  ) => Promise<TodoItem>;
  list: (
    options?: TodoItemsListOptionalParams,
  ) => PagedAsyncIterableIterator<TodoItem>;
  attachments: TodoItemsAttachmentsOperations;
}

function _getTodoItems(context: TodoContext) {
  return {
    delete: (id: number, options?: TodoItemsDeleteOptionalParams) =>
      $delete(context, id, options),
    update: (
      id: number,
      patch: TodoItemPatch,
      options?: TodoItemsUpdateOptionalParams,
    ) => update(context, id, patch, options),
    get: (id: number, options?: TodoItemsGetOptionalParams) =>
      get(context, id, options),
    createForm: (
      body: ToDoItemMultipartRequest,
      options?: TodoItemsCreateFormOptionalParams,
    ) => createForm(context, body, options),
    createJson: (item: TodoItem, options?: TodoItemsCreateJsonOptionalParams) =>
      createJson(context, item, options),
    list: (options?: TodoItemsListOptionalParams) => list(context, options),
  };
}

export function _getTodoItemsOperations(
  context: TodoContext,
): TodoItemsOperations {
  return {
    ..._getTodoItems(context),
    attachments: _getTodoItemsAttachmentsOperations(context),
  };
}
