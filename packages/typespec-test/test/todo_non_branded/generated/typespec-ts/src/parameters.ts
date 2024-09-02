// Licensed under the MIT License.

import { RequestParameters } from "@typespec/ts-http-runtime";
import { User, TodoItem, TodoUrlAttachment, TodoItemPatch } from "./models.js";

export interface UsersCreateBodyParam {
  body: { user: User };
}

export type UsersCreateParameters = UsersCreateBodyParam & RequestParameters;

export interface UsersValidateQueryParamProperties {
  token: string;
}

export interface UsersValidateQueryParam {
  queryParameters: UsersValidateQueryParamProperties;
}

export type UsersValidateParameters = UsersValidateQueryParam &
  RequestParameters;

export interface UsersLoginBodyParam {
  body: { username: string; password: string };
}

export type UsersLoginParameters = UsersLoginBodyParam & RequestParameters;
export type UsersLogoutParameters = RequestParameters;

export interface UsersForgotPasswordBodyParam {
  body: { email: string };
}

export type UsersForgotPasswordParameters = UsersForgotPasswordBodyParam &
  RequestParameters;

export interface UsersResetPasswordQueryParamProperties {
  resetToken: string;
}

export interface UsersResetPasswordQueryParam {
  queryParameters: UsersResetPasswordQueryParamProperties;
}

export type UsersResetPasswordParameters = UsersResetPasswordQueryParam &
  RequestParameters;

export interface TodoItemsListQueryParamProperties {
  /** The limit to the number of items */
  limit: number;
  /** The offset to start paginating at */
  offset: number;
}

export interface TodoItemsListQueryParam {
  queryParameters: TodoItemsListQueryParamProperties;
}

export type TodoItemsListParameters = TodoItemsListQueryParam &
  RequestParameters;

export interface TodoItemsCreateJsonBodyParam {
  body: { item: TodoItem; attachments: Array<TodoUrlAttachment> };
}

export interface TodoItemsCreateJsonMediaTypesParam {
  contentType: "application/json";
}

export type TodoItemsCreateJsonParameters = TodoItemsCreateJsonMediaTypesParam &
  TodoItemsCreateJsonBodyParam &
  RequestParameters;

export interface TodoItemsCreateFormBodyParam {
  body:
    | FormData
    | Array<
        | { name: "item"; body: TodoItem }
        | {
            name: "attachments";
            body:
              | TodoUrlAttachment
              | string
              | Uint8Array
              | ReadableStream<Uint8Array>
              | NodeJS.ReadableStream
              | File;
            filename?: string;
            contentType?: string;
          }
      >;
}

export interface TodoItemsCreateFormMediaTypesParam {
  contentType: "multipart/form-data";
}

export type TodoItemsCreateFormParameters = TodoItemsCreateFormMediaTypesParam &
  TodoItemsCreateFormBodyParam &
  RequestParameters;
export type TodoItemsGetParameters = RequestParameters;

export interface TodoItemsUpdateBodyParam {
  body: { patch: TodoItemPatch };
}

export interface TodoItemsUpdateMediaTypesParam {
  contentType: "application/merge-patch+json";
}

export type TodoItemsUpdateParameters = TodoItemsUpdateMediaTypesParam &
  TodoItemsUpdateBodyParam &
  RequestParameters;
export type TodoItemsDeleteParameters = RequestParameters;
export type TodoItemsAttachmentsListParameters = RequestParameters;

export interface TodoItemsAttachmentsCreateUrlAttachmentBodyParam {
  body: { contents: TodoUrlAttachment };
}

export interface TodoItemsAttachmentsCreateUrlAttachmentMediaTypesParam {
  contentType: "application/json";
}

export type TodoItemsAttachmentsCreateUrlAttachmentParameters =
  TodoItemsAttachmentsCreateUrlAttachmentMediaTypesParam &
    TodoItemsAttachmentsCreateUrlAttachmentBodyParam &
    RequestParameters;

export interface TodoItemsAttachmentsCreateFileAttachmentBodyParam {
  body:
    | FormData
    | Array<{
        name: "contents";
        body:
          | string
          | Uint8Array
          | ReadableStream<Uint8Array>
          | NodeJS.ReadableStream
          | File;
        filename?: string;
        contentType?: string;
      }>;
}

export interface TodoItemsAttachmentsCreateFileAttachmentMediaTypesParam {
  contentType: "multipart/form-data";
}

export type TodoItemsAttachmentsCreateFileAttachmentParameters =
  TodoItemsAttachmentsCreateFileAttachmentMediaTypesParam &
    TodoItemsAttachmentsCreateFileAttachmentBodyParam &
    RequestParameters;
