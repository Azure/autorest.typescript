// Licensed under the MIT License.

/* eslint-disable @typescript-eslint/naming-convention */
import {
  ApiError,
  todoItemArrayDeserializer,
  TodoItem,
  TodoAttachment,
  todoAttachmentArrayDeserializer,
} from "../models.js";

/** model interface _TodoPage */
export interface _TodoPage {
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
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function _todoPageDeserializer(item: any): _TodoPage {
  return {
    items: todoItemArrayDeserializer(item["items"]),
    pageSize: item["pageSize"],
    totalSize: item["totalSize"],
    prevLink: item["prevLink"],
    nextLink: item["nextLink"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface InvalidTodoItem */
export interface InvalidTodoItem extends ApiError {}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function invalidTodoItemDeserializer(item: any): InvalidTodoItem {
  return {
    code: item["code"],
    message: item["message"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface NotFoundErrorResponse */
export interface NotFoundErrorResponse {
  code: "not-found";
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function notFoundErrorResponseDeserializer(
  item: any,
): NotFoundErrorResponse {
  return {
    code: item["code"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
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

/* eslint-disable @typescript-eslint/naming-convention */
/** model interface _PageTodoAttachment */
export interface _PageTodoAttachment {
  items: TodoAttachment[];
}
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function _pageTodoAttachmentDeserializer(
  item: any,
): _PageTodoAttachment {
  return {
    items: todoAttachmentArrayDeserializer(item["items"]),
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
