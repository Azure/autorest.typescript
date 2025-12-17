// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext as Client } from "../index.js";
import {
  defaultErrorResponseDeserializer,
  User,
  userSerializer,
  userDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  UsersUpdatePublishingUserOptionalParams,
  UsersGetPublishingUserOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _updatePublishingUserSend(
  context: Client,
  userDetails: User,
  options: UsersUpdatePublishingUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/publishingUsers/web{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: userSerializer(userDetails),
    });
}

export async function _updatePublishingUserDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return userDeserializer(result.body);
}

/** Description for Updates publishing user */
export async function updatePublishingUser(
  context: Client,
  userDetails: User,
  options: UsersUpdatePublishingUserOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _updatePublishingUserSend(context, userDetails, options);
  return _updatePublishingUserDeserialize(result);
}

export function _getPublishingUserSend(
  context: Client,
  options: UsersGetPublishingUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.Web/publishingUsers/web{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getPublishingUserDeserialize(result: PathUncheckedResponse): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return userDeserializer(result.body);
}

/** Description for Gets publishing user */
export async function getPublishingUser(
  context: Client,
  options: UsersGetPublishingUserOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _getPublishingUserSend(context, options);
  return _getPublishingUserDeserialize(result);
}
