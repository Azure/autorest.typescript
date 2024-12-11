// Licensed under the MIT License.

import {
  uint8ArrayToString,
  stringToUint8Array,
} from "@typespec/ts-http-runtime";

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

export function todoItemArraySerializer(result: Array<TodoItem>): any[] {
  return result.map((item) => {
    return todoItemSerializer(item);
  });
}

export function todoItemArrayDeserializer(result: Array<TodoItem>): any[] {
  return result.map((item) => {
    return todoItemDeserializer(item);
  });
}

/** model interface TodoItem */
export interface TodoItem {
  /** The item's unique id */
  readonly id: number;
  /** The item's title */
  title: string;
  /** User that created the todo */
  readonly createdBy: number;
  /** User that the todo is assigned to */
  assignedTo?: number;
  /** A longer description of the todo item in markdown format */
  description?: string;
  /** The status of the todo item */
  status: "NotStarted" | "InProgress" | "Completed";
  /** When the todo item was created. */
  readonly createdAt: Date;
  /** When the todo item was last updated */
  readonly updatedAt: Date;
  /** When the todo item was makred as completed */
  readonly completedAt?: Date;
  labels?: TodoLabels;
  dummy?: string;
}

export function todoItemSerializer(item: TodoItem): any {
  return {
    title: item["title"],
    assignedTo: item["assignedTo"],
    description: item["description"],
    status: item["status"],
    labels: !item["labels"]
      ? item["labels"]
      : todoLabelsSerializer(item["labels"]),
    _dummy: item["dummy"],
  };
}

export function todoItemDeserializer(item: any): TodoItem {
  return {
    id: item["id"],
    title: item["title"],
    createdBy: item["createdBy"],
    assignedTo: item["assignedTo"],
    description: item["description"],
    status: item["status"],
    createdAt: new Date(item["createdAt"]),
    updatedAt: new Date(item["updatedAt"]),
    completedAt: !item["completedAt"]
      ? item["completedAt"]
      : new Date(item["completedAt"]),
    labels: !item["labels"]
      ? item["labels"]
      : todoLabelsDeserializer(item["labels"]),
    dummy: item["_dummy"],
  };
}

/** Alias for TodoLabels */
export type TodoLabels =
  | string
  | string[]
  | TodoLabelRecord
  | TodoLabelRecord[];

export function todoLabelsSerializer(item: TodoLabels): any {
  return item;
}

export function todoLabelsDeserializer(item: any): TodoLabels {
  return item;
}

/** model interface TodoLabelRecord */
export interface TodoLabelRecord {
  name: string;
  color?: string;
}

export function todoLabelRecordSerializer(item: TodoLabelRecord): any {
  return { name: item["name"], color: item["color"] };
}

export function todoLabelRecordDeserializer(item: any): TodoLabelRecord {
  return {
    name: item["name"],
    color: item["color"],
  };
}

export function todoLabelRecordArraySerializer(
  result: Array<TodoLabelRecord>,
): any[] {
  return result.map((item) => {
    return todoLabelRecordSerializer(item);
  });
}

export function todoLabelRecordArrayDeserializer(
  result: Array<TodoLabelRecord>,
): any[] {
  return result.map((item) => {
    return todoLabelRecordDeserializer(item);
  });
}

/** model interface TodoFileAttachment */
export interface TodoFileAttachment {
  /** The file name of the attachment */
  filename: string;
  /** The media type of the attachment */
  mediaType: string;
  /** The contents of the file */
  contents: Uint8Array;
}

export function todoFileAttachmentSerializer(item: TodoFileAttachment): any {
  return {
    filename: item["filename"],
    mediaType: item["mediaType"],
    contents: uint8ArrayToString(item["contents"], "base64"),
  };
}

export function todoFileAttachmentDeserializer(item: any): TodoFileAttachment {
  return {
    filename: item["filename"],
    mediaType: item["mediaType"],
    contents:
      typeof item["contents"] === "string"
        ? stringToUint8Array(item["contents"], "base64")
        : item["contents"],
  };
}

/** model interface TodoUrlAttachment */
export interface TodoUrlAttachment {
  /** A description of the URL */
  description: string;
  /** The url */
  url: string;
}

export function todoUrlAttachmentSerializer(item: TodoUrlAttachment): any {
  return { description: item["description"], url: item["url"] };
}

export function todoUrlAttachmentDeserializer(item: any): TodoUrlAttachment {
  return {
    description: item["description"],
    url: item["url"],
  };
}

export function todoAttachmentArraySerializer(
  result: Array<TodoAttachment>,
): any[] {
  return result.map((item) => {
    return todoAttachmentSerializer(item);
  });
}

export function todoAttachmentArrayDeserializer(
  result: Array<TodoAttachment>,
): any[] {
  return result.map((item) => {
    return todoAttachmentDeserializer(item);
  });
}

/** Alias for TodoAttachment */
export type TodoAttachment = TodoFileAttachment | TodoUrlAttachment;

export function todoAttachmentSerializer(item: TodoAttachment): any {
  return item;
}

export function todoAttachmentDeserializer(item: any): TodoAttachment {
  return item;
}

/** model interface _CreateResponse */
export interface _CreateResponse {
  /** The item's unique id */
  readonly id: number;
  /** The item's title */
  title: string;
  /** User that created the todo */
  readonly createdBy: number;
  /** User that the todo is assigned to */
  assignedTo?: number;
  /** A longer description of the todo item in markdown format */
  description?: string;
  /** The status of the todo item */
  status: "NotStarted" | "InProgress" | "Completed";
  /** When the todo item was created. */
  readonly createdAt: Date;
  /** When the todo item was last updated */
  readonly updatedAt: Date;
  /** When the todo item was makred as completed */
  readonly completedAt?: Date;
  labels?: TodoLabels;
}

export function _createResponseDeserializer(item: any): _CreateResponse {
  return {
    id: item["id"],
    title: item["title"],
    createdBy: item["createdBy"],
    assignedTo: item["assignedTo"],
    description: item["description"],
    status: item["status"],
    createdAt: new Date(item["createdAt"]),
    updatedAt: new Date(item["updatedAt"]),
    completedAt: !item["completedAt"]
      ? item["completedAt"]
      : new Date(item["completedAt"]),
    labels: !item["labels"]
      ? item["labels"]
      : todoLabelsDeserializer(item["labels"]),
  };
}

/** model interface _GetResponse */
export interface _GetResponse {
  /** The item's unique id */
  readonly id: number;
  /** The item's title */
  title: string;
  /** User that created the todo */
  readonly createdBy: number;
  /** User that the todo is assigned to */
  assignedTo?: number;
  /** A longer description of the todo item in markdown format */
  description?: string;
  /** The status of the todo item */
  status: "NotStarted" | "InProgress" | "Completed";
  /** When the todo item was created. */
  readonly createdAt: Date;
  /** When the todo item was last updated */
  readonly updatedAt: Date;
  /** When the todo item was makred as completed */
  readonly completedAt?: Date;
  labels?: TodoLabels;
}

export function _getResponseDeserializer(item: any): _GetResponse {
  return {
    id: item["id"],
    title: item["title"],
    createdBy: item["createdBy"],
    assignedTo: item["assignedTo"],
    description: item["description"],
    status: item["status"],
    createdAt: new Date(item["createdAt"]),
    updatedAt: new Date(item["updatedAt"]),
    completedAt: !item["completedAt"]
      ? item["completedAt"]
      : new Date(item["completedAt"]),
    labels: !item["labels"]
      ? item["labels"]
      : todoLabelsDeserializer(item["labels"]),
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

/** model interface _UpdateResponse */
export interface _UpdateResponse {
  /** The item's unique id */
  readonly id: number;
  /** The item's title */
  title: string;
  /** User that created the todo */
  readonly createdBy: number;
  /** User that the todo is assigned to */
  assignedTo?: number;
  /** A longer description of the todo item in markdown format */
  description?: string;
  /** The status of the todo item */
  status: "NotStarted" | "InProgress" | "Completed";
  /** When the todo item was created. */
  readonly createdAt: Date;
  /** When the todo item was last updated */
  readonly updatedAt: Date;
  /** When the todo item was makred as completed */
  readonly completedAt?: Date;
  labels?: TodoLabels;
}

export function _updateResponseDeserializer(item: any): _UpdateResponse {
  return {
    id: item["id"],
    title: item["title"],
    createdBy: item["createdBy"],
    assignedTo: item["assignedTo"],
    description: item["description"],
    status: item["status"],
    createdAt: new Date(item["createdAt"]),
    updatedAt: new Date(item["updatedAt"]),
    completedAt: !item["completedAt"]
      ? item["completedAt"]
      : new Date(item["completedAt"]),
    labels: !item["labels"]
      ? item["labels"]
      : todoLabelsDeserializer(item["labels"]),
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

/** model interface User */
export interface User {
  /** An autogenerated unique id for the user */
  readonly id: number;
  /** The user's username */
  username: string;
  /** The user's email address */
  email: string;
  /**
   * The user's password, provided when creating a user
   * but is otherwise not visible (and hashed by the backend)
   */
  password: string;
}

export function userSerializer(item: User): any {
  return {
    username: item["username"],
    email: item["email"],
    password: item["password"],
  };
}

/** model interface _CreateResponse1 */
export interface _CreateResponse1 {
  /** An autogenerated unique id for the user */
  readonly id: number;
  /** The user's username */
  username: string;
  /** The user's email address */
  email: string;
  /** The token to use to construct the validate email address url */
  token: string;
}

export function _createResponse1Deserializer(item: any): _CreateResponse1 {
  return {
    id: item["id"],
    username: item["username"],
    email: item["email"],
    token: item["token"],
  };
}
