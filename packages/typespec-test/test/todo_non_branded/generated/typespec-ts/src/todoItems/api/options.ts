// Licensed under the MIT License.

import { TodoAttachment } from "../../models/models.js";
import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface DeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface UpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateFormOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CreateJsonOptionalParams extends OperationOptions {
  attachments?: TodoAttachment[];
}

/** Optional parameters. */
export interface ListOptionalParams extends OperationOptions {
  /** The limit to the number of items */
  limit?: number;
  /** The offset to start paginating at */
  offset?: number;
}
