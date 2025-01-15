// Licensed under the MIT License.

import { TodoContext as Client, UsersCreateOptionalParams } from "../index.js";
import {
  standard4XXResponseDeserializer,
  standard5XXResponseDeserializer,
  User,
  userSerializer,
  _createResponseDeserializer,
} from "../../models/models.js";
import {
  userExistsResponseDeserializer,
  invalidUserResponseDeserializer,
} from "../../models/users/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createSend(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/users")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: userSerializer(user),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  id: number;
  username: string;
  email: string;
  token: string;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    const statusCode = Number.parseInt(result.status);
    if (statusCode === 409) {
      error.details = userExistsResponseDeserializer(result.body);
    } else if (statusCode === 422) {
      error.details = invalidUserResponseDeserializer(result.body);
    } else if (statusCode >= 400 && statusCode <= 499) {
      error.details = standard4XXResponseDeserializer(result.body);
    } else if (statusCode >= 500 && statusCode <= 599) {
      error.details = standard5XXResponseDeserializer(result.body);
    }
    throw error;
  }

  return _createResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  username: string;
  email: string;
  token: string;
}> {
  const result = await _createSend(context, user, options);
  return _createDeserialize(result);
}
