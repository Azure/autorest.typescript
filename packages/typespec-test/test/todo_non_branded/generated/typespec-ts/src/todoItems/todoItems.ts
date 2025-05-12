// Licensed under the MIT License.

import {
  Attachments,
  AttachmentsOptionalParams,
} from "./attachments/attachments.js";
import {
  createTodoItems,
  TodoItemsContext,
  TodoItemsOptionalParams,
} from "./api/index.js";
import { TodoItem, ToDoItemMultipartRequest } from "../models/models.js";
import { TodoItemPatch } from "../models/todoItems/models.js";
import {
  DeleteOptionalParams,
  UpdateOptionalParams,
  GetOptionalParams,
  CreateFormOptionalParams,
  CreateJsonOptionalParams,
  ListOptionalParams,
} from "./api/options.js";
import {
  $delete,
  update,
  get,
  createForm,
  createJson,
  list,
} from "./api/operations.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { Pipeline, KeyCredential } from "@typespec/ts-http-runtime";

export { TodoItemsOptionalParams } from "./api/todoItemsContext.js";

export class TodoItems {
  private _client: TodoItemsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _parentClientParams: {
    endpointParam: string;
    credential: KeyCredential;
    options: TodoItemsOptionalParams;
  };

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: TodoItemsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTodoItems(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._parentClientParams = { endpointParam, credential, options };
  }

  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    id: number,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return $delete(this._client, id, options);
  }

  update(
    id: number,
    patch: TodoItemPatch,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): Promise<TodoItem> {
    return update(this._client, id, patch, options);
  }

  get(
    id: number,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<TodoItem> {
    return get(this._client, id, options);
  }

  createForm(
    body: ToDoItemMultipartRequest,
    options: CreateFormOptionalParams = { requestOptions: {} },
  ): Promise<TodoItem> {
    return createForm(this._client, body, options);
  }

  createJson(
    item: TodoItem,
    options: CreateJsonOptionalParams = { requestOptions: {} },
  ): Promise<TodoItem> {
    return createJson(this._client, item, options);
  }

  list(
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TodoItem> {
    return list(this._client, options);
  }

  getAttachments(options: AttachmentsOptionalParams = {}): Attachments {
    return new Attachments(
      this._parentClientParams.endpointParam,
      this._parentClientParams.credential,

      { ...this._parentClientParams.options, ...options },
    );
  }
}
