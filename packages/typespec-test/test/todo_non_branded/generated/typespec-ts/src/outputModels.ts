// Licensed under the MIT License.

/** Something is wrong with you. */
export interface Standard4XXResponseOutput extends ApiErrorOutput {}

export interface ApiErrorOutput {
  /** A machine readable error code */
  code: string;
  /** A human readable message */
  message: string;
}

/** Something is wrong with me. */
export interface Standard5XXResponseOutput extends ApiErrorOutput {}

/** The user already exists */
export interface UserExistsResponseOutput extends ApiErrorOutput {
  code: "user-exists";
}

/** The user is invalid (e.g. forgot to enter email address) */
export interface InvalidUserResponseOutput extends ApiErrorOutput {
  code: "invalid-user";
}

export interface InvalidTodoItemOutput extends ApiErrorOutput {}

export interface TodoPageOutput {
  /** The items in the page */
  items: Array<TodoItemOutput>;
  pagination: {
    pageSize: number;
    totalSize: number;
    prevLink?: string;
    nextLink?: string;
  };
}

export interface TodoItemOutput {
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
  readonly createdAt: string;
  /** When the todo item was last updated */
  readonly updatedAt: string;
  /** When the todo item was makred as completed */
  readonly completedAt?: string;
  labels?: TodoLabelsOutput;
  _dummy?: string;
}

export interface TodoLabelRecordOutput {
  name: string;
  color?: string;
}

export interface TodoFileAttachmentOutput {
  /** The file name of the attachment */
  filename: string;
  /** The media type of the attachment */
  mediaType: string;
  /** The contents of the file */
  contents: string;
}

export interface TodoUrlAttachmentOutput {
  /** A description of the URL */
  description: string;
  /** The url */
  url: string;
}

export interface PageOutput {
  items: TodoAttachmentOutput[];
}

/** Alias for TodoLabelsOutput */
export type TodoLabelsOutput =
  | string
  | string[]
  | TodoLabelRecordOutput
  | Array<TodoLabelRecordOutput>;
/** Alias for TodoAttachmentOutput */
export type TodoAttachmentOutput =
  | TodoFileAttachmentOutput
  | TodoUrlAttachmentOutput;
