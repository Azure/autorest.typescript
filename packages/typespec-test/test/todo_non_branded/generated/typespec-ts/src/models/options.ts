// Licensed under the MIT license.

import { OperationOptions } from "@typespec/ts-http-runtime";
import { TodoUrlAttachment } from "./models.js";

export interface UsersCreateOptionalParams extends OperationOptions {}

export interface UsersValidateOptionalParams extends OperationOptions {}

export interface UsersLoginOptionalParams extends OperationOptions {}

export interface UsersLogoutOptionalParams extends OperationOptions {}

export interface UsersForgotPasswordOptionalParams extends OperationOptions {}

export interface UsersResetPasswordOptionalParams extends OperationOptions {}

export interface TodoItemsListOptionalParams extends OperationOptions {}

export interface TodoItemsCreateJsonOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface TodoItemsCreateFormOptionalParams extends OperationOptions {
  contentType?: string;
  attachments?: (TodoUrlAttachment | Uint8Array)[];
}

export interface TodoItemsGetOptionalParams extends OperationOptions {}

export interface TodoItemsUpdateOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface TodoItemsDeleteOptionalParams extends OperationOptions {}

export interface TodoItemsAttachmentsListOptionalParams
  extends OperationOptions {}

export interface TodoItemsAttachmentsCreateUrlAttachmentOptionalParams
  extends OperationOptions {
  contentType?: string;
}

export interface TodoItemsAttachmentsCreateFileAttachmentOptionalParams
  extends OperationOptions {
  contentType?: string;
}
