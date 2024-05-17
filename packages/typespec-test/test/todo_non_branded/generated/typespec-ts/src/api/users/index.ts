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
} from "@typespec/ts-http-runtime";
import {
  UsersCreateOptionalParams,
  UsersValidateOptionalParams,
  UsersLoginOptionalParams,
  UsersLogoutOptionalParams,
  UsersForgotPasswordOptionalParams,
  UsersResetPasswordOptionalParams,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  UsersCreate200Response | UsersCreate409Response | UsersCreate422Response
> {
  return context
    .path("/users")
    .post({
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

export async function _createDeserialize(
  result:
    | UsersCreate200Response
    | UsersCreate409Response
    | UsersCreate422Response,
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

export async function create(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): Promise<UserCreatedResponse> {
  const result = await _createSend(context, user, options);
  return _createDeserialize(result);
}

export function _validateSend(
  context: Client,
  token: string,
  options: UsersValidateOptionalParams = { requestOptions: {} },
): StreamableMethod<UsersValidate200Response | UsersValidate422Response> {
  return context
    .path("/validate")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { token: token },
    });
}

export async function _validateDeserialize(
  result: UsersValidate200Response | UsersValidate422Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function validate(
  context: Client,
  token: string,
  options: UsersValidateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _validateSend(context, token, options);
  return _validateDeserialize(result);
}

export function _loginSend(
  context: Client,
  username: string,
  password: string,
  options: UsersLoginOptionalParams = { requestOptions: {} },
): StreamableMethod<UsersLogin200Response | UsersLogin401Response> {
  return context
    .path("/login")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { username: username, password: password },
    });
}

export async function _loginDeserialize(
  result: UsersLogin200Response | UsersLogin401Response,
): Promise<void> {
  if (result.status !== "200" && result.status !== "401") {
    throw createRestError(result);
  }

  return;
}

export async function login(
  context: Client,
  username: string,
  password: string,
  options: UsersLoginOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _loginSend(context, username, password, options);
  return _loginDeserialize(result);
}

export function _logoutSend(
  context: Client,
  options: UsersLogoutOptionalParams = { requestOptions: {} },
): StreamableMethod<UsersLogout200Response> {
  return context
    .path("/logout")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _logoutDeserialize(
  result: UsersLogout200Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function logout(
  context: Client,
  options: UsersLogoutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _logoutSend(context, options);
  return _logoutDeserialize(result);
}

export function _forgotPasswordSend(
  context: Client,
  email: string,
  options: UsersForgotPasswordOptionalParams = { requestOptions: {} },
): StreamableMethod<
  UsersForgotPassword200Response | UsersForgotPassword404Response
> {
  return context
    .path("/forgot-password")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { email: email },
    });
}

export async function _forgotPasswordDeserialize(
  result: UsersForgotPassword200Response | UsersForgotPassword404Response,
): Promise<void> {
  if (result.status !== "200" && result.status !== "404") {
    throw createRestError(result);
  }

  return;
}

/** Sends a reset token to the user's email address */
export async function forgotPassword(
  context: Client,
  email: string,
  options: UsersForgotPasswordOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _forgotPasswordSend(context, email, options);
  return _forgotPasswordDeserialize(result);
}

export function _resetPasswordSend(
  context: Client,
  resetToken: string,
  options: UsersResetPasswordOptionalParams = { requestOptions: {} },
): StreamableMethod<
  UsersResetPassword200Response | UsersResetPassword404Response
> {
  return context
    .path("/reset-password")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { resetToken: resetToken },
    });
}

export async function _resetPasswordDeserialize(
  result: UsersResetPassword200Response | UsersResetPassword404Response,
): Promise<void> {
  if (result.status !== "200" && result.status !== "404") {
    throw createRestError(result);
  }

  return;
}

export async function resetPassword(
  context: Client,
  resetToken: string,
  options: UsersResetPasswordOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resetPasswordSend(context, resetToken, options);
  return _resetPasswordDeserialize(result);
}
