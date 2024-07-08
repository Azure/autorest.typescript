// Licensed under the MIT license.

import { TodoContext } from "../../api/todoContext.js";
import { User } from "../../models/models.js";
import { create } from "../../api/users/index.js";
import { UsersCreateOptionalParams } from "../../models/options.js";

/** Interface representing a Users operations. */
export interface UsersOperations {
  create: (
    user: User,
    options?: UsersCreateOptionalParams,
  ) => Promise<{ id: number; username: string; email: string; token: string }>;
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
