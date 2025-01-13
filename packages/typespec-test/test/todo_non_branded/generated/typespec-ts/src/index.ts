// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { TodoClient } from "./todoClient.js";
export {
  TodoPage,
  TodoItem,
  TodoLabels,
  TodoLabelRecord,
  Standard4XXResponse,
  ApiError,
  Standard5XXResponse,
  TodoFileAttachment,
  TodoUrlAttachment,
  TodoAttachment,
  InvalidTodoItem,
  NotFoundErrorResponse,
  TodoItemPatch,
  PageTodoAttachment,
  User,
  UserExistsResponse,
  InvalidUserResponse,
} from "./models/index.js";
export {
  TodoItemsAttachmentsCreateAttachmentOptionalParams,
  TodoItemsAttachmentsListOptionalParams,
  TodoItemsDeleteOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsCreateOptionalParams,
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
