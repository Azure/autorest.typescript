// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandardContext as Client, isUnexpected } from "../rest/index.js";
import {
  OperationRawReturnType,
  RequestOptions,
} from "../common/interfaces.js";
import { User } from "./models.js";

export interface CreateOrReplaceOptions extends RequestOptions {}

export function _createOrReplaceSend(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
) {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .put({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      body: { role: role },
    });
}

export async function _createOrReplaceDeserialize(
  result: OperationRawReturnType<typeof _createOrReplaceSend>
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    name: result.body["name"],
    role: result.body["role"],
  };
}

/** Creates or replaces a User */
export async function createOrReplace(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<User> {
  const result = await _createOrReplaceSend(context, role, name, options);
  return _createOrReplaceDeserialize(result);
}
