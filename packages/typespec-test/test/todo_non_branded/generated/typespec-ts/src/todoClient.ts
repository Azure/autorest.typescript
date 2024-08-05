// Licensed under the MIT license.

import { KeyCredential } from "@typespec/ts-http-runtime";
import { Pipeline } from "@typespec/ts-http-runtime";
import { getUsersOperations, UsersOperations } from "./classic/users/index.js";
import {
  getTodoItemsOperations,
  TodoItemsOperations,
} from "./classic/todoItems/index.js";
import { createTodo, TodoClientOptionalParams } from "./api/index.js";
import { TodoContext } from "./api/todoContext.js";

export { TodoClientOptionalParams } from "./api/todoContext.js";

export class TodoClient {
  private _client: TodoContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential,
    options: TodoClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createTodo(endpoint, credential, {
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
