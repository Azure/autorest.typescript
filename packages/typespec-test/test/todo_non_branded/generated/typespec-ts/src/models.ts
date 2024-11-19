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
}

export interface TodoItem {
  /** The item's unique id */
  id: number;
  /** The item's title */
  title: string;
  /** User that the todo is assigned to */
  ownedBy: number;
  /** A longer description of the todo item in markdown format */
  description: string;
  /** The status of the todo item */
  status: "NotStarted" | "InProgress" | "Completed";
  labels: TodoLabel[];
}

export interface TodoLabelRecord {
  name: string;
  color?: string;
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
  ownedBy?: number;
  /** A longer description of the todo item in markdown format */
  description?: string;
  /** The status of the todo item */
  status?: "NotStarted" | "InProgress" | "Completed";
}

/** Alias for TodoLabel */
export type TodoLabel =
  | string
  | string[]
  | TodoLabelRecord
  | Array<TodoLabelRecord>;
