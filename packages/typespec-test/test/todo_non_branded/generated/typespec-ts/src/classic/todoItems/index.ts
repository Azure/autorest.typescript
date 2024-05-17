// Licensed under the MIT license.

import { TodoContext } from "../../api/todoContext.js";
import {
  TodoPage,
  TodoItem,
  TodoUrlAttachment,
  TodoItemPatch,
} from "../../models/models.js";
import {
  list,
  createJson,
  createForm,
  get,
  update,
  $delete,
} from "../../api/todoItems/index.js";
import {
  TodoItemsListOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsDeleteOptionalParams,
} from "../../models/options.js";
import {
  TodoItemsAttachmentsOperations,
  getTodoItemsAttachmentsOperations,
} from "./attachments/index.js";

export interface TodoItemsOperations {
  list: (
    limit: number,
    offset: number,
    options?: TodoItemsListOptionalParams,
  ) => Promise<TodoPage>;
  createJson: (
    item: TodoItem,
    attachments: TodoUrlAttachment[],
    options?: TodoItemsCreateJsonOptionalParams,
  ) => Promise<TodoItem>;
  createForm: (
    item: TodoItem,
    options?: TodoItemsCreateFormOptionalParams,
  ) => Promise<TodoItem>;
  get: (id: number, options?: TodoItemsGetOptionalParams) => Promise<TodoItem>;
  update: (
    id: number,
    patch: TodoItemPatch,
    options?: TodoItemsUpdateOptionalParams,
  ) => Promise<TodoItem>;
  delete: (
    id: number,
    options?: TodoItemsDeleteOptionalParams,
  ) => Promise<void>;
  attachments: TodoItemsAttachmentsOperations;
}

export function getTodoItems(context: TodoContext) {
  return {
    list: (
      limit: number,
      offset: number,
      options?: TodoItemsListOptionalParams,
    ) => list(context, limit, offset, options),
    createJson: (
      item: TodoItem,
      attachments: TodoUrlAttachment[],
      options?: TodoItemsCreateJsonOptionalParams,
    ) => createJson(context, item, attachments, options),
    createForm: (item: TodoItem, options?: TodoItemsCreateFormOptionalParams) =>
      createForm(context, item, options),
    get: (id: number, options?: TodoItemsGetOptionalParams) =>
      get(context, id, options),
    update: (
      id: number,
      patch: TodoItemPatch,
      options?: TodoItemsUpdateOptionalParams,
    ) => update(context, id, patch, options),
    delete: (id: number, options?: TodoItemsDeleteOptionalParams) =>
      $delete(context, id, options),
  };
}

export function getTodoItemsOperations(
  context: TodoContext,
): TodoItemsOperations {
  return {
    ...getTodoItems(context),
    attachments: getTodoItemsAttachmentsOperations(context),
  };
}
