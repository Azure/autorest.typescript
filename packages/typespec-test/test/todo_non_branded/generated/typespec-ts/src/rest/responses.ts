// Licensed under the MIT license.

import { HttpResponse } from "@typespec/ts-http-runtime";
import {
  Standard4XXResponseOutput,
  UserExistsResponseOutput,
  InvalidUserResponseOutput,
  Standard5XXResponseOutput,
  TodoPageOutput,
  TodoLabelsOutput,
  InvalidTodoItemOutput,
  TodoAttachmentOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface UsersCreate200Response extends HttpResponse {
  status: "200";
  body: { id: number; username: string; email: string; token: string };
}

/** Client error */
export interface UsersCreate400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** The request conflicts with the current state of the server. */
export interface UsersCreate409Response extends HttpResponse {
  status: "409";
  body: UserExistsResponseOutput;
}

/** Client error */
export interface UsersCreate422Response extends HttpResponse {
  status: "422";
  body: InvalidUserResponseOutput;
}

/** Server error */
export interface UsersCreate500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** The request has succeeded. */
export interface TodoItemsList200Response extends HttpResponse {
  status: "200";
  body: TodoPageOutput;
}

/** Client error */
export interface TodoItemsList400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** Server error */
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

/** Client error */
export interface TodoItemsCreate400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** Client error */
export interface TodoItemsCreate422Response extends HttpResponse {
  status: "422";
  body: InvalidTodoItemOutput;
}

/** Server error */
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

/** Client error */
export interface TodoItemsDelete400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** The server cannot find the requested resource. */
export interface TodoItemsDelete404Response extends HttpResponse {
  status: "404";
}

/** Server error */
export interface TodoItemsDelete500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsList200Response extends HttpResponse {
  status: "200";
  body: TodoAttachmentOutput[];
}

/** Client error */
export interface TodoItemsAttachmentsList400Response extends HttpResponse {
  status: "400";
  body: Standard4XXResponseOutput;
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsList404Response extends HttpResponse {
  status: "404";
}

/** Server error */
export interface TodoItemsAttachmentsList500Response extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TodoItemsAttachmentsCreateAttachment204Response
  extends HttpResponse {
  status: "204";
}

/** Client error */
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

/** Server error */
export interface TodoItemsAttachmentsCreateAttachment500Response
  extends HttpResponse {
  status: "500";
  body: Standard5XXResponseOutput;
}
