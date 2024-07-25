// Licensed under the MIT license.

import { TodoContext } from "../../api/todoContext.js";
import { User, UserCreatedResponse } from "../../models/models.js";
import {
  create,
  validate,
  login,
  logout,
  forgotPassword,
  resetPassword,
} from "../../api/users/index.js";
import {
  UsersCreateOptionalParams,
  UsersValidateOptionalParams,
  UsersLoginOptionalParams,
  UsersLogoutOptionalParams,
  UsersForgotPasswordOptionalParams,
  UsersResetPasswordOptionalParams,
} from "../../models/options.js";

/** Interface representing a Users operations. */
export interface UsersOperations {
  create: (
    user: User,
    options?: UsersCreateOptionalParams,
  ) => Promise<UserCreatedResponse>;
  validate: (
    token: string,
    options?: UsersValidateOptionalParams,
  ) => Promise<void>;
  login: (
    username: string,
    password: string,
    options?: UsersLoginOptionalParams,
  ) => Promise<void>;
  logout: (options?: UsersLogoutOptionalParams) => Promise<void>;
  /** Sends a reset token to the user's email address */
  forgotPassword: (
    email: string,
    options?: UsersForgotPasswordOptionalParams,
  ) => Promise<void>;
  resetPassword: (
    resetToken: string,
    options?: UsersResetPasswordOptionalParams,
  ) => Promise<void>;
}

export function getUsers(context: TodoContext) {
  return {
    create: (user: User, options?: UsersCreateOptionalParams) =>
      create(context, user, options),
    validate: (token: string, options?: UsersValidateOptionalParams) =>
      validate(context, token, options),
    login: (
      username: string,
      password: string,
      options?: UsersLoginOptionalParams,
    ) => login(context, username, password, options),
    logout: (options?: UsersLogoutOptionalParams) => logout(context, options),
    forgotPassword: (
      email: string,
      options?: UsersForgotPasswordOptionalParams,
    ) => forgotPassword(context, email, options),
    resetPassword: (
      resetToken: string,
      options?: UsersResetPasswordOptionalParams,
    ) => resetPassword(context, resetToken, options),
  };
}

export function getUsersOperations(context: TodoContext): UsersOperations {
  return {
    ...getUsers(context),
  };
}
