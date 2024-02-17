// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { TodoUrlAttachment } from "./models.js";

export interface UsersCreateOptions extends OperationOptions {}

export interface UsersValidateOptions extends OperationOptions {}

export interface UsersLoginOptions extends OperationOptions {}

export interface UsersLogoutOptions extends OperationOptions {}

export interface UsersForgotPasswordOptions extends OperationOptions {}

export interface UsersResetPasswordOptions extends OperationOptions {}

export interface TodoItemsListOptions extends OperationOptions {}

export interface TodoItemsCreateJsonOptions extends OperationOptions {
  contentType?: string;
}

export interface TodoItemsCreateFormOptions extends OperationOptions {
  contentType?: string;
  attachments?: (TodoUrlAttachment | string)[];
}

export interface TodoItemsGetOptions extends OperationOptions {}

export interface TodoItemsUpdateOptions extends OperationOptions {
  contentType?: string;
}

export interface TodoItemsDeleteOperationOptions extends OperationOptions {}

export interface AttachmentsListOptions extends OperationOptions {}

export interface AttachmentsCreateUrlAttachmentOptions
  extends OperationOptions {
  contentType?: string;
}

export interface AttachmentsCreateFileAttachmentOptions
  extends OperationOptions {
  contentType?: string;
}
