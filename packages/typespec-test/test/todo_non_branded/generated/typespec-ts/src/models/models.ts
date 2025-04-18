// Licensed under the MIT License.

import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";
import {
  uint8ArrayToString,
  stringToUint8Array,
} from "@typespec/ts-http-runtime";

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

/** model interface ApiError */
export interface ApiError {
  /** A machine readable error code */
  code: string;
  /** A human readable message */
  message: string;
}

export function apiErrorDeserializer(item: any): ApiError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Something is wrong with you. */
export interface Standard4XXResponse extends ApiError {}

export function standard4XXResponseDeserializer(
  item: any,
): Standard4XXResponse {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Something is wrong with me. */
export interface Standard5XXResponse extends ApiError {}

export function standard5XXResponseDeserializer(
  item: any,
): Standard5XXResponse {
  return {
    code: item["code"],
    message: item["message"],
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

/** model interface TodoAttachment */
export interface TodoAttachment {
  /** The file name of the attachment */
  filename: string;
  /** The media type of the attachment */
  mediaType: string;
  /** The contents of the file */
  contents: Uint8Array;
}

export function todoAttachmentSerializer(item: TodoAttachment): any {
  return {
    filename: item["filename"],
    mediaType: item["mediaType"],
    contents: uint8ArrayToString(item["contents"], "base64"),
  };
}

export function todoAttachmentDeserializer(item: any): TodoAttachment {
  return {
    filename: item["filename"],
    mediaType: item["mediaType"],
    contents:
      typeof item["contents"] === "string"
        ? stringToUint8Array(item["contents"], "base64")
        : item["contents"],
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

/** model interface ToDoItemMultipartRequest */
export interface ToDoItemMultipartRequest {
  item: TodoItem;
  attachments?: Array<
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string }
  >;
}

export function toDoItemMultipartRequestSerializer(
  item: ToDoItemMultipartRequest,
): any {
  return [
    { name: "item", body: todoItemSerializer(item["item"]) },
    ...(item["attachments"] === undefined
      ? []
      : [
          ...item["attachments"].map((x: unknown) =>
            createFilePartDescriptor("attachments", x),
          ),
        ]),
  ];
}

/** model interface FileAttachmentMultipartRequest */
export interface FileAttachmentMultipartRequest {
  contents:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
}

export function fileAttachmentMultipartRequestSerializer(
  item: FileAttachmentMultipartRequest,
): any {
  return [createFilePartDescriptor("contents", item["contents"])];
}
