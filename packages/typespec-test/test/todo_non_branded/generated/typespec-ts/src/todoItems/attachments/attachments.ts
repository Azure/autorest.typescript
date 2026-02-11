// Licensed under the MIT License.

import { createAttachments, AttachmentsContext, AttachmentsOptionalParams } from "./api/index.js";
import { TodoAttachment, FileAttachmentMultipartRequest } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { createFileAttachment, createJsonAttachment, list } from "./api/operations.js";
import {
  CreateFileAttachmentOptionalParams,
  CreateJsonAttachmentOptionalParams,
  ListOptionalParams,
} from "./api/options.js";
import { Pipeline, KeyCredential } from "@typespec/ts-http-runtime";

export { AttachmentsOptionalParams } from "./api/attachmentsContext.js";

export class Attachments {
  private _client: AttachmentsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: AttachmentsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAttachments(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  createFileAttachment(
    itemId: number,
    body: FileAttachmentMultipartRequest,
    options: CreateFileAttachmentOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createFileAttachment(this._client, itemId, body, options);
  }

  createJsonAttachment(
    itemId: number,
    contents: TodoAttachment,
    options: CreateJsonAttachmentOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createJsonAttachment(this._client, itemId, contents, options);
  }

  list(
    itemId: number,
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TodoAttachment> {
    return list(this._client, itemId, options);
  }
}
