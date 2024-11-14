// Licensed under the MIT License.

export interface User {
  /** The user's username */
  username: string;
  /** The user's email address */
  email: string;
  /**
   * The user's password, provided when creating a user
   * but is otherwise not visible (and hashed by the backend)
   */
  password: string;
  /** Whether the user is validated. Never visible to the API. */
  validated: boolean;
}

export interface TodoItem {
  /** The item's title */
  title: string;
  /** User that the todo is assigned to */
  assignedTo?: number;
  /** A longer description of the todo item in markdown format */
  description?: string;
  /** The status of the todo item */
  status: "NotStarted" | "InProgress" | "Completed";
  labels?: TodoLabels;
  _dummy?: string;
}

export interface TodoLabelRecord {
  name: string;
  color?: string;
}

export interface TodoFileAttachment {
  /** The file name of the attachment */
  filename: string;
  /** The media type of the attachment */
  mediaType: string;
  /** The contents of the file */
  contents: string;
}

export interface TodoUrlAttachment {
  /** A description of the URL */
  description: string;
  /** The url */
  url: string;
}

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

/** Alias for TodoLabels */
export type TodoLabels =
  | string
  | string[]
  | TodoLabelRecord
  | Array<TodoLabelRecord>;
/** Alias for TodoAttachment */
export type TodoAttachment = TodoFileAttachment | TodoUrlAttachment;
