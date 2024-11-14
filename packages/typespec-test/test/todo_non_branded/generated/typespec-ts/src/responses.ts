// Licensed under the MIT License.

import { HttpResponse } from "@typespec/ts-http-runtime";
import {
  Standard4XXResponseOutput,
  UserExistsResponseOutput,
  InvalidUserResponseOutput,
  Standard5XXResponseOutput,
  TodoPageOutput,
  TodoLabelsOutput,
  InvalidTodoItemOutput,
  PageOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface UsersCreate200Response extends HttpResponse {
  status: "200";
  body: { id: number; username: string; email: string; token: string };
}

/** Something is wrong with you. */
export interface UsersCreate400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
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

/** Something is wrong with me. */
export interface UsersCreate500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** The request has succeeded. */
export interface TodoItemsList200Response extends HttpResponse {
  status: "200";
  body: TodoPageOutput;
}

/** Something is wrong with you. */
export interface TodoItemsList400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** Something is wrong with me. */
export interface TodoItemsList500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** The request has succeeded. */
export interface TodoItemsCreate200Response extends HttpResponse {
  status: "200";
  body: {
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: string;
    updatedAt: string;
    completedAt?: string;
    labels?: TodoLabelsOutput;
  };
}

/** Something is wrong with you. */
export interface TodoItemsCreate400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** Client error */
export interface TodoItemsCreate422Response extends HttpResponse {
  status: "422";
  body: InvalidTodoItemOutput;
}

/** Something is wrong with me. */
export interface TodoItemsCreate500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** The request has succeeded. */
export interface TodoItemsGet200Response extends HttpResponse {
  status: "200";
  body: {
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: string;
    updatedAt: string;
    completedAt?: string;
    labels?: TodoLabelsOutput;
  };
}

/** The server cannot find the requested resource. */
export interface TodoItemsGet404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsUpdate200Response extends HttpResponse {
  status: "200";
  body: {
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: string;
    updatedAt: string;
    completedAt?: string;
    labels?: TodoLabelsOutput;
  };
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TodoItemsDelete204Response extends HttpResponse {
  status: "204";
}

/** Something is wrong with you. */
export interface TodoItemsDelete400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** The server cannot find the requested resource. */
export interface TodoItemsDelete404Response extends HttpResponse {
  status: "404";
}

/** Something is wrong with me. */
export interface TodoItemsDelete500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsList200Response extends HttpResponse {
  status: "200";
  body: PageOutput;
}

/** Something is wrong with you. */
export interface TodoItemsAttachmentsList400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsList404Response extends HttpResponse {
  status: "404";
}

/** Something is wrong with me. */
export interface TodoItemsAttachmentsList500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TodoItemsAttachmentsCreateAttachment204Response
  extends HttpResponse {
  status: "204";
}

/** Something is wrong with you. */
export interface TodoItemsAttachmentsCreateAttachment400Response
  extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsCreateAttachment404Response
  extends HttpResponse {
  status: "404";
}

/** Something is wrong with me. */
export interface TodoItemsAttachmentsCreateAttachment500Response
  extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}
