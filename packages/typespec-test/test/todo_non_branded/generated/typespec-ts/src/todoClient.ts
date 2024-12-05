// Licensed under the MIT License.

import { getUsersOperations, UsersOperations } from "./classic/users/index.js";
import {
  getTodoItemsOperations,
  TodoItemsOperations,
} from "./classic/todoItems/index.js";
import {
  createTodo,
  TodoContext,
  TodoClientOptionalParams,
} from "./api/index.js";
import { Pipeline, KeyCredential } from "@typespec/ts-http-runtime";

export { TodoClientOptionalParams } from "./api/todoContext.js";

export class TodoClient {
  private _client: TodoContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: TodoClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTodo(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.users = getUsersOperations(this._client);
    this.todoItems = getTodoItemsOperations(this._client);
  }

  /** The operation groups for Users */
  public readonly users: UsersOperations;
  /** The operation groups for TodoItems */
  public readonly todoItems: TodoItemsOperations;
}
