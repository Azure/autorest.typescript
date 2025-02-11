// Licensed under the MIT License.

import { TodoContext } from "../../api/todoContext.js";
import {
  $delete,
  update,
  get,
  createForm,
  createJson,
  list,
} from "../../api/todoItems/index.js";
import { TodoItemPatch } from "../../models/todoItems/models.js";
import {
  TodoItem,
  TodoLabels,
  ToDoItemMultipartRequest,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsListOptionalParams,
} from "../../api/options.js";
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
  ) => Promise<{
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    labels?: TodoLabels;
  }>;
  get: (
    id: number,
    options?: TodoItemsGetOptionalParams,
  ) => Promise<{
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    labels?: TodoLabels;
  }>;
  createForm: (
    body: ToDoItemMultipartRequest,
    options?: TodoItemsCreateFormOptionalParams,
  ) => Promise<{
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    labels?: TodoLabels;
  }>;
  createJson: (
    item: TodoItem,
    options?: TodoItemsCreateJsonOptionalParams,
  ) => Promise<{
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    labels?: TodoLabels;
  }>;
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
