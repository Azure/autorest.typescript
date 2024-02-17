// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TodoContext } from "../../api/TodoContext.js";
import {
  TodoPage,
  TodoItem,
  TodoUrlAttachment,
  TodoItemPatch,
} from "../../models/models.js";
import {
  todoItemsList,
  todoItemsCreateJson,
  todoItemsCreateForm,
  todoItemsGet,
  todoItemsUpdate,
  todoItemsDeleteOperation,
} from "../../api/todoItems/index.js";
import {
  TodoItemsListOptions,
  TodoItemsCreateJsonOptions,
  TodoItemsCreateFormOptions,
  TodoItemsGetOptions,
  TodoItemsUpdateOptions,
  TodoItemsDeleteOperationOptions,
} from "../../models/options.js";

export interface TodoItemsOperations {
  list: (
    limit: number,
    offset: number,
    options?: TodoItemsListOptions
  ) => Promise<TodoPage>;
  createJson: (
    item: TodoItem,
    attachments: TodoUrlAttachment[],
    options?: TodoItemsCreateJsonOptions
  ) => Promise<TodoItem>;
  createForm: (
    item: TodoItem,
    options?: TodoItemsCreateFormOptions
  ) => Promise<TodoItem>;
  get: (id: number, options?: TodoItemsGetOptions) => Promise<TodoItem>;
  update: (
    id: number,
    patch: TodoItemPatch,
    options?: TodoItemsUpdateOptions
  ) => Promise<TodoItem>;
  delete: (
    id: number,
    options?: TodoItemsDeleteOperationOptions
  ) => Promise<void>;
}

export function getTodoItems(context: TodoContext) {
  return {
    list: (limit: number, offset: number, options?: TodoItemsListOptions) =>
      todoItemsList(context, limit, offset, options),
    createJson: (
      item: TodoItem,
      attachments: TodoUrlAttachment[],
      options?: TodoItemsCreateJsonOptions
    ) => todoItemsCreateJson(context, item, attachments, options),
    createForm: (item: TodoItem, options?: TodoItemsCreateFormOptions) =>
      todoItemsCreateForm(context, item, options),
    get: (id: number, options?: TodoItemsGetOptions) =>
      todoItemsGet(context, id, options),
    update: (
      id: number,
      patch: TodoItemPatch,
      options?: TodoItemsUpdateOptions
    ) => todoItemsUpdate(context, id, patch, options),
    deleteOperation: (id: number, options?: TodoItemsDeleteOperationOptions) =>
      todoItemsDeleteOperation(context, id, options),
  };
}

export function getTodoItemsOperations(
  context: TodoContext
): TodoItemsOperations {
  return {
    ...getTodoItems(context),
  };
}
