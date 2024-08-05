// Licensed under the MIT license.

import { OperationOptions } from "@typespec/ts-http-runtime";
import { TodoUrlAttachment } from "./models.js";

/** Optional parameters. */
export interface UsersCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersValidateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersLoginOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersLogoutOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersForgotPasswordOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UsersResetPasswordOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsCreateJsonOptionalParams extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface TodoItemsCreateFormOptionalParams extends OperationOptions {
  contentType?: string;
  attachments?: (TodoUrlAttachment | Uint8Array)[];
}

/** Optional parameters. */
export interface TodoItemsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsUpdateOptionalParams extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface TodoItemsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsAttachmentsListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsAttachmentsCreateUrlAttachmentOptionalParams
  extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface TodoItemsAttachmentsCreateFileAttachmentOptionalParams
  extends OperationOptions {
  contentType?: string;
}
