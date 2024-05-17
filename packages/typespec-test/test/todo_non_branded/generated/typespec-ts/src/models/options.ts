// Licensed under the MIT license.

import { OperationOptions } from "@typespec/ts-http-runtime";
import { TodoAttachment } from "./models.js";

export interface UsersCreateOptionalParams extends OperationOptions {}

export interface TodoItemsListOptionalParams extends OperationOptions {
  /** The limit to the number of items */
  limit?: number;
  /** The offset to start paginating at */
  offset?: number;
}

export interface TodoItemsCreateOptionalParams extends OperationOptions {
  contentType?: string;
  attachments?: TodoAttachment[];
}

export interface TodoItemsGetOptionalParams extends OperationOptions {}

export interface TodoItemsUpdateOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface TodoItemsDeleteOptionalParams extends OperationOptions {}

export interface TodoItemsAttachmentsListOptionalParams
  extends OperationOptions {}

export interface TodoItemsAttachmentsCreateAttachmentOptionalParams
  extends OperationOptions {}
