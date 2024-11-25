// Licensed under the MIT License.

import { UsersCreateOptionalParams } from "../../api/options.js";
import { TodoContext } from "../../api/todoContext.js";
import { create } from "../../api/users/index.js";
import { User } from "../../models/models.js";

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

export function getUsers(context: TodoContext) {
  return {
    create: (user: User, options?: UsersCreateOptionalParams) =>
      create(context, user, options),
  };
}

export function getUsersOperations(context: TodoContext): UsersOperations {
  return {
    ...getUsers(context),
  };
}
