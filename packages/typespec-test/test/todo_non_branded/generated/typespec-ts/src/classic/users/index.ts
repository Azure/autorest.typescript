// Licensed under the MIT License.

import { TodoContext } from "../../api/todoContext.js";
import { create, UsersCreateOptionalParams } from "../../api/users/index.js";
import { User } from "../../models/models.js";
import { UserCreatedResponse } from "../../models/users/models.js";

/** Interface representing a Users operations. */
export interface UsersOperations {
  create: (
    user: User,
    options?: UsersCreateOptionalParams,
  ) => Promise<UserCreatedResponse>;
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
