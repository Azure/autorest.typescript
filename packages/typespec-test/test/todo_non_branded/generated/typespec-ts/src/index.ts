// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";
import { FileContents } from "./static-helpers/multipartHelpers.js";

export { TodoClient } from "./todoClient.js";
export {
  TodoItem,
  TodoLabels,
  TodoLabelRecord,
  Standard4XXResponse,
  ApiError,
  Standard5XXResponse,
  TodoAttachment,
  ToDoItemMultipartRequest,
  FileAttachmentMultipartRequest,
  User,
} from "./models/index.js";
export {
  TodoPage,
  InvalidTodoItem,
  NotFoundErrorResponse,
  TodoItemPatch,
  PageTodoAttachment,
} from "./models/todoItems/index.js";
export {
  UserExistsResponse,
  InvalidUserResponse,
} from "./models/users/index.js";
export {
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsListOptionalParams,
  UsersCreateOptionalParams,
  TodoClientOptionalParams,
} from "./api/index.js";
export {
  TodoItemsOperations,
  UsersOperations,
  TodoItemsAttachmentsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { FileContents };
