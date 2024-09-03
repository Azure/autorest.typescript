// Licensed under the MIT License.

import {
  UsersCreateParameters,
  UsersValidateParameters,
  UsersLoginParameters,
  UsersLogoutParameters,
  UsersForgotPasswordParameters,
  UsersResetPasswordParameters,
  TodoItemsListParameters,
  TodoItemsCreateJsonParameters,
  TodoItemsCreateFormParameters,
  TodoItemsGetParameters,
  TodoItemsUpdateParameters,
  TodoItemsDeleteParameters,
  TodoItemsAttachmentsListParameters,
  TodoItemsAttachmentsCreateUrlAttachmentParameters,
  TodoItemsAttachmentsCreateFileAttachmentParameters,
} from "./parameters.js";
import {
  UsersCreate200Response,
  UsersCreate409Response,
  UsersCreate422Response,
  UsersValidate200Response,
  UsersValidate422Response,
  UsersLogin200Response,
  UsersLogin401Response,
  UsersLogout200Response,
  UsersForgotPassword200Response,
  UsersForgotPassword404Response,
  UsersResetPassword200Response,
  UsersResetPassword404Response,
  TodoItemsList200Response,
  TodoItemsCreateJson200Response,
  TodoItemsCreateJson422Response,
  TodoItemsCreateForm200Response,
  TodoItemsCreateForm422Response,
  TodoItemsGet200Response,
  TodoItemsGet404Response,
  TodoItemsUpdate200Response,
  TodoItemsDelete200Response,
  TodoItemsDelete404Response,
  TodoItemsAttachmentsList200Response,
  TodoItemsAttachmentsList404Response,
  TodoItemsAttachmentsCreateUrlAttachment200Response,
  TodoItemsAttachmentsCreateUrlAttachment404Response,
  TodoItemsAttachmentsCreateFileAttachment200Response,
  TodoItemsAttachmentsCreateFileAttachment404Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@typespec/ts-http-runtime";

export interface UsersCreate {
  post(
    options: UsersCreateParameters,
  ): StreamableMethod<
    UsersCreate200Response | UsersCreate409Response | UsersCreate422Response
  >;
}

export interface UsersValidate {
  get(
    options: UsersValidateParameters,
  ): StreamableMethod<UsersValidate200Response | UsersValidate422Response>;
}

export interface UsersLogin {
  post(
    options: UsersLoginParameters,
  ): StreamableMethod<UsersLogin200Response | UsersLogin401Response>;
}

export interface UsersLogout {
  get(
    options?: UsersLogoutParameters,
  ): StreamableMethod<UsersLogout200Response>;
}

export interface UsersForgotPassword {
  /** Sends a reset token to the user's email address */
  post(
    options: UsersForgotPasswordParameters,
  ): StreamableMethod<
    UsersForgotPassword200Response | UsersForgotPassword404Response
  >;
}

export interface UsersResetPassword {
  get(
    options: UsersResetPasswordParameters,
  ): StreamableMethod<
    UsersResetPassword200Response | UsersResetPassword404Response
  >;
}

export interface TodoItemsList {
  get(
    options: TodoItemsListParameters,
  ): StreamableMethod<TodoItemsList200Response>;
  post(
    options: TodoItemsCreateJsonParameters,
  ): StreamableMethod<
    TodoItemsCreateJson200Response | TodoItemsCreateJson422Response
  >;
  post(
    options: TodoItemsCreateFormParameters,
  ): StreamableMethod<
    TodoItemsCreateForm200Response | TodoItemsCreateForm422Response
  >;
}

export interface TodoItemsGet {
  get(
    options?: TodoItemsGetParameters,
  ): StreamableMethod<TodoItemsGet200Response | TodoItemsGet404Response>;
  patch(
    options: TodoItemsUpdateParameters,
  ): StreamableMethod<TodoItemsUpdate200Response>;
  delete(
    options?: TodoItemsDeleteParameters,
  ): StreamableMethod<TodoItemsDelete200Response | TodoItemsDelete404Response>;
}

export interface TodoItemsAttachmentsList {
  get(
    options?: TodoItemsAttachmentsListParameters,
  ): StreamableMethod<
    TodoItemsAttachmentsList200Response | TodoItemsAttachmentsList404Response
  >;
  post(
    options: TodoItemsAttachmentsCreateUrlAttachmentParameters,
  ): StreamableMethod<
    | TodoItemsAttachmentsCreateUrlAttachment200Response
    | TodoItemsAttachmentsCreateUrlAttachment404Response
  >;
  post(
    options: TodoItemsAttachmentsCreateFileAttachmentParameters,
  ): StreamableMethod<
    | TodoItemsAttachmentsCreateFileAttachment200Response
    | TodoItemsAttachmentsCreateFileAttachment404Response
  >;
}

export interface Routes {
  /** Resource for '/users' has methods for the following verbs: post */
  (path: "/users"): UsersCreate;
  /** Resource for '/validate' has methods for the following verbs: get */
  (path: "/validate"): UsersValidate;
  /** Resource for '/login' has methods for the following verbs: post */
  (path: "/login"): UsersLogin;
  /** Resource for '/logout' has methods for the following verbs: get */
  (path: "/logout"): UsersLogout;
  /** Resource for '/forgot-password' has methods for the following verbs: post */
  (path: "/forgot-password"): UsersForgotPassword;
  /** Resource for '/reset-password' has methods for the following verbs: get */
  (path: "/reset-password"): UsersResetPassword;
  /** Resource for '/items' has methods for the following verbs: get, post */
  (path: "/items"): TodoItemsList;
  /** Resource for '/items/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/items/{id}", id: number): TodoItemsGet;
  /** Resource for '/items/\{itemId\}/attachments' has methods for the following verbs: get, post */
  (
    path: "/items/{itemId}/attachments",
    itemId: number,
  ): TodoItemsAttachmentsList;
}

export type TodoClient = Client & {
  path: Routes;
};
