// Licensed under the MIT license.

import { User } from "../../models/models.js";
import {
  TodoContext as Client,
  UsersCreate200Response,
  UsersCreate400Response,
  UsersCreate409Response,
  UsersCreate422Response,
  UsersCreate500Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";
import { UsersCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | UsersCreate200Response
  | UsersCreate400Response
  | UsersCreate409Response
  | UsersCreate422Response
  | UsersCreate500Response
> {
  return context
    .path("/users")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        username: user["username"],
        email: user["email"],
        password: user["password"],
        validated: user["validated"],
      },
    });
}

export async function _createDeserialize(
  result:
    | UsersCreate200Response
    | UsersCreate400Response
    | UsersCreate409Response
    | UsersCreate422Response
    | UsersCreate500Response,
): Promise<{ id: number; username: string; email: string; token: string }> {
  return {
    id: result.body["id"],
    username: result.body["username"],
    email: result.body["email"],
    token: result.body["token"],
  };
}

export async function create(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): Promise<{ id: number; username: string; email: string; token: string }> {
  const result = await _createSend(context, user, options);
  return _createDeserialize(result);
}
