// Licensed under the MIT License.

import {
  todoItemArrayDeserializer,
  TodoItem,
  ApiError,
  TodoAttachment,
  todoAttachmentArrayDeserializer,
} from "../models.js";

/** model interface TodoPage */
export interface TodoPage {
  /** The items in the page */
  items: TodoItem[];
  /** The number of items returned in this page */
  pageSize: number;
  /** The total number of items */
  totalSize: number;
  /** A link to the previous page, if it exists */
  prevLink?: string;
  /** A link to the next page, if it exists */
  nextLink?: string;
}

export function todoPageDeserializer(item: any): TodoPage {
  return {
    items: todoItemArrayDeserializer(item["items"]),
    pageSize: item["pageSize"],
    totalSize: item["totalSize"],
    prevLink: item["prevLink"],
    nextLink: item["nextLink"],
  };
}

/** model interface InvalidTodoItem */
export interface InvalidTodoItem extends ApiError {}

export function invalidTodoItemDeserializer(item: any): InvalidTodoItem {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** model interface NotFoundErrorResponse */
export interface NotFoundErrorResponse {
  code: "not-found";
}

export function notFoundErrorResponseDeserializer(
  item: any,
): NotFoundErrorResponse {
  return {
    code: item["code"],
  };
}

/** model interface TodoItemPatch */
export interface TodoItemPatch {
  /** The item's title */
  title?: string;
  /** User that the todo is assigned to */
  assignedTo?: number | null;
  /** A longer description of the todo item in markdown format */
  description?: string | null;
  /** The status of the todo item */
  status?: "NotStarted" | "InProgress" | "Completed";
}

export function todoItemPatchSerializer(item: TodoItemPatch): any {
  return {
    title: item["title"],
    assignedTo: item["assignedTo"],
    description: item["description"],
    status: item["status"],
  };
}

/** model interface PageTodoAttachment */
export interface PageTodoAttachment {
  items: TodoAttachment[];
}

export function pageTodoAttachmentDeserializer(item: any): PageTodoAttachment {
  return {
    items: todoAttachmentArrayDeserializer(item["items"]),
  };
}
