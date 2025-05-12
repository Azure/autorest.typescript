// Licensed under the MIT License.

import { createUsers, UsersContext, UsersOptionalParams } from "./api/index.js";
import { User } from "../models/models.js";
import { UserCreatedResponse } from "../models/users/models.js";
import { CreateOptionalParams } from "./api/options.js";
import { create } from "./api/operations.js";
import { Pipeline, KeyCredential } from "@typespec/ts-http-runtime";

export { UsersOptionalParams } from "./api/usersContext.js";

export class Users {
  private _client: UsersContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: UsersOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createUsers(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  create(
    user: User,
    options: CreateOptionalParams = { requestOptions: {} },
  ): Promise<UserCreatedResponse> {
    return create(this._client, user, options);
  }
}
