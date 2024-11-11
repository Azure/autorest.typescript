// Licensed under the MIT License.

import { HttpResponse } from "@typespec/ts-http-runtime";
import {
  UserCreatedResponseOutput,
  UserExistsResponseOutput,
  InvalidUserResponseOutput,
  TodoPageOutput,
  TodoItemOutput,
  InvalidTodoItemOutput,
  TodoAttachmentOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface UsersCreate200Response extends HttpResponse {
  status: "200";
  body: UserCreatedResponseOutput;
}

/** The user already exists */
export interface UsersCreate409Response extends HttpResponse {
  status: "409";
  body: UserExistsResponseOutput;
}

/** The user is invalid (e.g. forgot to enter email address) */
export interface UsersCreate422Response extends HttpResponse {
  status: "422";
  body: InvalidUserResponseOutput;
}

/** The request has succeeded. */
export interface UsersValidate200Response extends HttpResponse {
  status: "200";
}

/** The user is invalid (e.g. forgot to enter email address) */
export interface UsersValidate422Response extends HttpResponse {
  status: "422";
  body: InvalidUserResponseOutput;
}

/** The request has succeeded. */
export interface UsersLogin200Response extends HttpResponse {
  status: "200";
}

/** Access is unauthorized. */
export interface UsersLogin401Response extends HttpResponse {
  status: "401";
}

/** The request has succeeded. */
export interface UsersLogout200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface UsersForgotPassword200Response extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface UsersForgotPassword404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface UsersResetPassword200Response extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface UsersResetPassword404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsList200Response extends HttpResponse {
  status: "200";
  body: TodoPageOutput;
}

/** The request has succeeded. */
export interface TodoItemsCreateJson200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** Client error */
export interface TodoItemsCreateJson422Response extends HttpResponse {
  status: "422";
  body: InvalidTodoItemOutput;
}

/** The request has succeeded. */
export interface TodoItemsCreateForm200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** Client error */
export interface TodoItemsCreateForm422Response extends HttpResponse {
  status: "422";
  body: InvalidTodoItemOutput;
}

/** The request has succeeded. */
export interface TodoItemsGet200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** The server cannot find the requested resource. */
export interface TodoItemsGet404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsUpdate200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** The request has succeeded. */
export interface TodoItemsDelete200Response extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface TodoItemsDelete404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsList200Response extends HttpResponse {
  status: "200";
  body: { items: TodoAttachmentOutput[] };
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsList404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsCreateUrlAttachment200Response
  extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsCreateUrlAttachment404Response
  extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsCreateFileAttachment200Response
  extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsCreateFileAttachment404Response
  extends HttpResponse {
  status: "404";
}
