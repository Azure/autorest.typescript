// Licensed under the MIT License.

import { FileContents } from "./static-helpers/multipartHelpers.js";
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
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsListOptionalParams,
} from "./api/todoItems/index.js";
export type { UsersCreateOptionalParams } from "./api/users/index.js";
export type {
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "./api/todoItems/attachments/index.js";
export type {
  TodoItemsOperations,
  UsersOperations,
  TodoItemsAttachmentsOperations,
} from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export type { FileContents };
