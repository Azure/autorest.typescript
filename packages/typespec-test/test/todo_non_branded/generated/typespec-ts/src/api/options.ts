// Licensed under the MIT License.

import { TodoAttachment } from "../models/models.js";
import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface TodoItemsAttachmentsCreateAttachmentOptionalParams
  extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

/** Optional parameters. */
export interface TodoItemsAttachmentsListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsCreateOptionalParams extends OperationOptions {
  attachments?: TodoAttachment[];
}

/** Optional parameters. */
export interface TodoItemsListOptionalParams extends OperationOptions {
  /** The limit to the number of items */
  limit?: number;
  /** The offset to start paginating at */
  offset?: number;
}

/** Optional parameters. */
export interface UsersCreateOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}
