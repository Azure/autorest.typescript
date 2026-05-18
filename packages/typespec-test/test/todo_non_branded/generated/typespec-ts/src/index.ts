// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { TodoClient } from "./todoClient.js";
export type {
  User,
  ApiError,
  Standard4XXResponse,
  Standard5XXResponse,
  TodoItem,
  TodoLabels,
  TodoLabelRecord,
  TodoAttachment,
  ToDoItemMultipartRequest,
  FileAttachmentMultipartRequest,
} from "./models/index.js";
export type {
  InvalidTodoItem,
  NotFoundErrorResponse,
  TodoItemPatch,
} from "./models/todoItems/index.js";
export type {
  UserCreatedResponse,
  UserExistsResponse,
  InvalidUserResponse,
} from "./models/users/index.js";
export type { TodoClientOptionalParams } from "./api/index.js";
export type {
  TodoItemsAttachmentsOperations,
  TodoItemsOperations,
  UsersOperations,
} from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
