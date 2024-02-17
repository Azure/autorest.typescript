// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { getUsersOperations, UsersOperations } from "./classic/users/index.js";
import {
  getTodoItemsOperations,
  TodoItemsOperations,
} from "./classic/todoItems/index.js";
import {
  getAttachmentsOperations,
  AttachmentsOperations,
} from "./classic/attachments/index.js";
import { createTodo, TodoClientOptions, TodoContext } from "./api/index.js";

export { TodoClientOptions } from "./api/TodoContext.js";

export class TodoClient {
  private _client: TodoContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential,
    options: TodoClientOptions = {},
  ) {
    this._client = createTodo(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.users = getUsersOperations(this._client);
    this.todoItems = getTodoItemsOperations(this._client);
    this.attachments = getAttachmentsOperations(this._client);
  }

  /** The operation groups for Users */
  public readonly users: UsersOperations;
  /** The operation groups for TodoItems */
  public readonly todoItems: TodoItemsOperations;
  /** The operation groups for Attachments */
  public readonly attachments: AttachmentsOperations;
}
