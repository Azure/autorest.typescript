// Licensed under the MIT License.

import { Users, UsersOptionalParams } from "./users/users.js";
import { TodoItems, TodoItemsOptionalParams } from "./todoItems/todoItems.js";
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
  /** The parent client parameters that are used in the constructors. */
  private _parentClientParams: {
    endpointParam: string;
    credential: KeyCredential;
    options: TodoClientOptionalParams;
  };

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
    this._parentClientParams = { endpointParam, credential, options };
  }

  getUsers(options: UsersOptionalParams = {}): Users {
    return new Users(
      this._parentClientParams.endpointParam,
      this._parentClientParams.credential,

      { ...this._parentClientParams.options, ...options },
    );
  }

  getTodoItems(options: TodoItemsOptionalParams = {}): TodoItems {
    return new TodoItems(
      this._parentClientParams.endpointParam,
      this._parentClientParams.credential,

      { ...this._parentClientParams.options, ...options },
    );
  }
}
