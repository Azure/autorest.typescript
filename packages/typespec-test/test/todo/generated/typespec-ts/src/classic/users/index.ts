// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TodoContext } from "../../api/TodoContext.js";
import { User, UserCreatedResponse } from "../../models/models.js";
import {
  usersCreate,
  usersValidate,
  usersLogin,
  usersLogout,
  usersForgotPassword,
  usersResetPassword,
} from "../../api/users/index.js";
import {
  UsersCreateOptions,
  UsersValidateOptions,
  UsersLoginOptions,
  UsersLogoutOptions,
  UsersForgotPasswordOptions,
  UsersResetPasswordOptions,
} from "../../models/options.js";

export interface UsersOperations {
  create: (
    user: User,
    options?: UsersCreateOptions,
  ) => Promise<UserCreatedResponse>;
  validate: (token: string, options?: UsersValidateOptions) => Promise<void>;
  login: (
    username: string,
    password: string,
    options?: UsersLoginOptions,
  ) => Promise<void>;
  logout: (options?: UsersLogoutOptions) => Promise<void>;
  forgotPassword: (
    email: string,
    options?: UsersForgotPasswordOptions,
  ) => Promise<void>;
  resetPassword: (
    resetToken: string,
    options?: UsersResetPasswordOptions,
  ) => Promise<void>;
}

export function getUsers(context: TodoContext) {
  return {
    create: (user: User, options?: UsersCreateOptions) =>
      usersCreate(context, user, options),
    validate: (token: string, options?: UsersValidateOptions) =>
      usersValidate(context, token, options),
    login: (username: string, password: string, options?: UsersLoginOptions) =>
      usersLogin(context, username, password, options),
    logout: (options?: UsersLogoutOptions) => usersLogout(context, options),
    forgotPassword: (email: string, options?: UsersForgotPasswordOptions) =>
      usersForgotPassword(context, email, options),
    resetPassword: (resetToken: string, options?: UsersResetPasswordOptions) =>
      usersResetPassword(context, resetToken, options),
  };
}

export function getUsersOperations(context: TodoContext): UsersOperations {
  return {
    ...getUsers(context),
  };
}
