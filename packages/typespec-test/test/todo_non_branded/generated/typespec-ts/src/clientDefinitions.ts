// Licensed under the MIT License.

import {
  UsersCreateParameters,
  TodoItemsListParameters,
  TodoItemsCreateParameters,
  TodoItemsGetParameters,
  TodoItemsUpdateParameters,
  TodoItemsDeleteParameters,
  TodoItemsAttachmentsListParameters,
  TodoItemsAttachmentsCreateAttachmentParameters,
} from "./parameters.js";
import {
  UsersCreate200Response,
  UsersCreate400Response,
  UsersCreate409Response,
  UsersCreate422Response,
  UsersCreate500Response,
  TodoItemsList200Response,
  TodoItemsList400Response,
  TodoItemsList500Response,
  TodoItemsCreate200Response,
  TodoItemsCreate400Response,
  TodoItemsCreate422Response,
  TodoItemsCreate500Response,
  TodoItemsGet200Response,
  TodoItemsGet404Response,
  TodoItemsUpdate200Response,
  TodoItemsDelete204Response,
  TodoItemsDelete400Response,
  TodoItemsDelete404Response,
  TodoItemsDelete500Response,
  TodoItemsAttachmentsList200Response,
  TodoItemsAttachmentsList400Response,
  TodoItemsAttachmentsList404Response,
  TodoItemsAttachmentsList500Response,
  TodoItemsAttachmentsCreateAttachment204Response,
  TodoItemsAttachmentsCreateAttachment400Response,
  TodoItemsAttachmentsCreateAttachment404Response,
  TodoItemsAttachmentsCreateAttachment500Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@typespec/ts-http-runtime";

export interface UsersCreate {
  post(
    options: UsersCreateParameters,
  ): StreamableMethod<
    | UsersCreate200Response
    | UsersCreate400Response
    | UsersCreate409Response
    | UsersCreate422Response
    | UsersCreate500Response
  >;
}

export interface TodoItemsList {
  get(
    options?: TodoItemsListParameters,
  ): StreamableMethod<
    | TodoItemsList200Response
    | TodoItemsList400Response
    | TodoItemsList500Response
  >;
  post(
    options: TodoItemsCreateParameters,
  ): StreamableMethod<
    | TodoItemsCreate200Response
    | TodoItemsCreate400Response
    | TodoItemsCreate422Response
    | TodoItemsCreate500Response
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
  ): StreamableMethod<
    | TodoItemsDelete204Response
    | TodoItemsDelete400Response
    | TodoItemsDelete404Response
    | TodoItemsDelete500Response
  >;
}

export interface TodoItemsAttachmentsList {
  get(
    options?: TodoItemsAttachmentsListParameters,
  ): StreamableMethod<
    | TodoItemsAttachmentsList200Response
    | TodoItemsAttachmentsList400Response
    | TodoItemsAttachmentsList404Response
    | TodoItemsAttachmentsList500Response
  >;
  post(
    options: TodoItemsAttachmentsCreateAttachmentParameters,
  ): StreamableMethod<
    | TodoItemsAttachmentsCreateAttachment204Response
    | TodoItemsAttachmentsCreateAttachment400Response
    | TodoItemsAttachmentsCreateAttachment404Response
    | TodoItemsAttachmentsCreateAttachment500Response
  >;
}

export interface Routes {
  /** Resource for '/users' has methods for the following verbs: post */
  (path: "/users"): UsersCreate;
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
