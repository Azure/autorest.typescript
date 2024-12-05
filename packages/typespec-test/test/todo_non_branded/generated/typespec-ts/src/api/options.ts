// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";
import { TodoAttachment } from "../models/models.js";

/** Optional parameters. */
export interface UsersCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface TodoItemsListOptionalParams extends OperationOptions {
  /** The limit to the number of items */
  limit?: number;
  /** The offset to start paginating at */
  offset?: number;
}

/** Optional parameters. */
export interface TodoItemsCreateOptionalParams extends OperationOptions {
  contentType?: string;
  attachments?: TodoAttachment[];
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
export interface TodoItemsAttachmentsCreateAttachmentOptionalParams
  extends OperationOptions {}
