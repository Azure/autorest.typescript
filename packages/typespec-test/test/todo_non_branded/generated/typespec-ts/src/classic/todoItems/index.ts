// Licensed under the MIT License.

import { TodoContext } from "../../api/todoContext.js";
import {
  $delete,
  update,
  get,
  create,
  list,
} from "../../api/todoItems/index.js";
import { TodoItemPatch } from "../../models/todoItems/models.js";
import { TodoItem, TodoLabels } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateOptionalParams,
  TodoItemsListOptionalParams,
} from "../../api/options.js";
import {
  TodoItemsAttachmentsOperations,
  getTodoItemsAttachmentsOperations,
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
  create: (
    item: TodoItem,
    options?: TodoItemsCreateOptionalParams,
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
    create: (item: TodoItem, options?: TodoItemsCreateOptionalParams) =>
      create(context, item, options),
    list: (options?: TodoItemsListOptionalParams) => list(context, options),
  };
}

export function getTodoItemsOperations(
  context: TodoContext,
): TodoItemsOperations {
  return {
    ..._getTodoItems(context),
    attachments: getTodoItemsAttachmentsOperations(context),
  };
}
