// Licensed under the MIT License.

import { RequestParameters } from "@typespec/ts-http-runtime";
import { User, TodoItem, TodoAttachment, TodoItemPatch } from "./models.js";

export interface UsersCreateBodyParam {
  body: User;
}

export type UsersCreateParameters = UsersCreateBodyParam & RequestParameters;

export interface TodoItemsListQueryParamProperties {
  /** The limit to the number of items */
  limit?: number;
  /** The offset to start paginating at */
  offset?: number;
}

export interface TodoItemsListQueryParam {
  queryParameters?: TodoItemsListQueryParamProperties;
}

export type TodoItemsListParameters = TodoItemsListQueryParam &
  RequestParameters;

export interface TodoItemsCreateBodyParam {
  body: { item: TodoItem; attachments?: TodoAttachment[] };
}

export interface TodoItemsCreateMediaTypesParam {
  contentType: "application/json";
}

export type TodoItemsCreateParameters = TodoItemsCreateMediaTypesParam &
  TodoItemsCreateBodyParam &
  RequestParameters;
export type TodoItemsGetParameters = RequestParameters;
export type TodoItemPatchResourceMergeAndPatch = Partial<TodoItemPatch>;

export interface TodoItemsUpdateBodyParam {
  body: TodoItemPatchResourceMergeAndPatch;
}

export interface TodoItemsUpdateMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type TodoItemsUpdateParameters = TodoItemsUpdateMediaTypesParam &
  TodoItemsUpdateBodyParam &
  RequestParameters;
export type TodoItemsDeleteParameters = RequestParameters;
export type TodoItemsAttachmentsListParameters = RequestParameters;

export interface TodoItemsAttachmentsCreateAttachmentBodyParam {
  body: TodoAttachment;
}

export type TodoItemsAttachmentsCreateAttachmentParameters =
  TodoItemsAttachmentsCreateAttachmentBodyParam & RequestParameters;
