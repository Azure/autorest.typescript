// Licensed under the MIT License.

import { FileContents } from "./static-helpers/multipartHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { TodoClient } from "./todoClient.js";
export {
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
export {
  InvalidTodoItem,
  NotFoundErrorResponse,
  TodoItemPatch,
} from "./models/todoItems/index.js";
export {
  UserExistsResponse,
  InvalidUserResponse,
} from "./models/users/index.js";
export { TodoClientOptionalParams } from "./api/index.js";
export {
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateFormOptionalParams,
  TodoItemsCreateJsonOptionalParams,
  TodoItemsListOptionalParams,
} from "./api/todoItems/index.js";
export { UsersCreateOptionalParams } from "./api/users/index.js";
export {
  TodoItemsAttachmentsCreateFileAttachmentOptionalParams,
  TodoItemsAttachmentsCreateJsonAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
} from "./api/todoItems/attachments/index.js";
export {
  TodoItemsOperations,
  UsersOperations,
  TodoItemsAttachmentsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { FileContents };
