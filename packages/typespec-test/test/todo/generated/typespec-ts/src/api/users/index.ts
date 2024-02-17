// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User, UserCreatedResponse } from "../../models/models.js";
import {
  TodoContext as Client,
  UsersCreate200Response,
  UsersCreate409Response,
  UsersCreate422Response,
  UsersForgotPassword200Response,
  UsersForgotPassword404Response,
  UsersLogin200Response,
  UsersLogin401Response,
  UsersLogout200Response,
  UsersResetPassword200Response,
  UsersResetPassword404Response,
  UsersValidate200Response,
  UsersValidate422Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UsersCreateOptions,
  UsersValidateOptions,
  UsersLoginOptions,
  UsersLogoutOptions,
  UsersForgotPasswordOptions,
  UsersResetPasswordOptions,
} from "../../models/options.js";

export function _usersCreateSend(
  context: Client,
  user: User,
  options: UsersCreateOptions = { requestOptions: {} }
): StreamableMethod<
  UsersCreate200Response | UsersCreate409Response | UsersCreate422Response
> {
  return context.path("/users").post({
    ...operationOptionsToRequestParameters(options),
    body: {
      user: {
        username: user["username"],
        email: user["email"],
        password: user["password"],
      },
    },
  });
}

export async function _usersCreateDeserialize(
  result:
    | UsersCreate200Response
    | UsersCreate409Response
    | UsersCreate422Response
): Promise<UserCreatedResponse> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    username: result.body["username"],
    email: result.body["email"],
    password: result.body["password"],
    token: result.body["token"],
  };
}

export async function usersCreate(
  context: Client,
  user: User,
  options: UsersCreateOptions = { requestOptions: {} }
): Promise<UserCreatedResponse> {
  const result = await _usersCreateSend(context, user, options);
  return _usersCreateDeserialize(result);
}

export function _usersValidateSend(
  context: Client,
  token: string,
  options: UsersValidateOptions = { requestOptions: {} }
): StreamableMethod<UsersValidate200Response | UsersValidate422Response> {
  return context.path("/validate").get({
    ...operationOptionsToRequestParameters(options),
    queryParameters: { token: token },
  });
}

export async function _usersValidateDeserialize(
  result: UsersValidate200Response | UsersValidate422Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function usersValidate(
  context: Client,
  token: string,
  options: UsersValidateOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _usersValidateSend(context, token, options);
  return _usersValidateDeserialize(result);
}

export function _usersLoginSend(
  context: Client,
  username: string,
  password: string,
  options: UsersLoginOptions = { requestOptions: {} }
): StreamableMethod<UsersLogin200Response | UsersLogin401Response> {
  return context.path("/login").post({
    ...operationOptionsToRequestParameters(options),
    body: { username: username, password: password },
  });
}

export async function _usersLoginDeserialize(
  result: UsersLogin200Response | UsersLogin401Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function usersLogin(
  context: Client,
  username: string,
  password: string,
  options: UsersLoginOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _usersLoginSend(context, username, password, options);
  return _usersLoginDeserialize(result);
}

export function _usersLogoutSend(
  context: Client,
  options: UsersLogoutOptions = { requestOptions: {} }
): StreamableMethod<UsersLogout200Response> {
  return context
    .path("/logout")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _usersLogoutDeserialize(
  result: UsersLogout200Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function usersLogout(
  context: Client,
  options: UsersLogoutOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _usersLogoutSend(context, options);
  return _usersLogoutDeserialize(result);
}

export function _usersForgotPasswordSend(
  context: Client,
  email: string,
  options: UsersForgotPasswordOptions = { requestOptions: {} }
): StreamableMethod<
  UsersForgotPassword200Response | UsersForgotPassword404Response
> {
  return context.path("/forgot-password").post({
    ...operationOptionsToRequestParameters(options),
    body: { email: email },
  });
}

export async function _usersForgotPasswordDeserialize(
  result: UsersForgotPassword200Response | UsersForgotPassword404Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

/** Sends a reset token to the user's email address */
export async function usersForgotPassword(
  context: Client,
  email: string,
  options: UsersForgotPasswordOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _usersForgotPasswordSend(context, email, options);
  return _usersForgotPasswordDeserialize(result);
}

export function _usersResetPasswordSend(
  context: Client,
  resetToken: string,
  options: UsersResetPasswordOptions = { requestOptions: {} }
): StreamableMethod<
  UsersResetPassword200Response | UsersResetPassword404Response
> {
  return context.path("/reset-password").get({
    ...operationOptionsToRequestParameters(options),
    queryParameters: { resetToken: resetToken },
  });
}

export async function _usersResetPasswordDeserialize(
  result: UsersResetPassword200Response | UsersResetPassword404Response
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function usersResetPassword(
  context: Client,
  resetToken: string,
  options: UsersResetPasswordOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _usersResetPasswordSend(context, resetToken, options);
  return _usersResetPasswordDeserialize(result);
}
