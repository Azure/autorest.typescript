// Licensed under the MIT License.

import { TodoContext } from "../../api/todoContext.js";
import { create } from "../../api/users/index.js";
import { User } from "../../models/models.js";
import { UsersCreateOptionalParams } from "../../api/options.js";

/** Interface representing a Users operations. */
export interface UsersOperations {
  create: (
    user: User,
    options?: UsersCreateOptionalParams,
  ) => Promise<{
    id: number;
    username: string;
    email: string;
    token: string;
  }>;
}

function _getUsers(context: TodoContext) {
  return {
    create: (user: User, options?: UsersCreateOptionalParams) =>
      create(context, user, options),
  };
}

export function _getUsersOperations(context: TodoContext): UsersOperations {
  return {
    ..._getUsers(context),
  };
}
