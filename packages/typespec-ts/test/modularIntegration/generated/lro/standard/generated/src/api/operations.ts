// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  User,
  OperationStatus,
  ResourceOperationStatus
} from "../models/models.js";
import {
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  CreateOrReplaceLogicalResponse,
  DeleteLogicalResponse,
  DeleteOperation202Response,
  DeleteOperationDefaultResponse,
  ExportLogicalResponse,
  ExportOperation202Response,
  ExportOperationDefaultResponse,
  isUnexpected,
  StandardContext as Client
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError
} from "@azure-rest/core-client";
import {
  CreateOrReplaceOptions,
  DeleteOperationOptions,
  ExportOperationOptions
} from "../models/options.js";

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrReplace200Response
  | CreateOrReplace201Response
  | CreateOrReplaceDefaultResponse
  | CreateOrReplaceLogicalResponse
> {
  return context.path("/azure/core/lro/standard/users/{name}", name).put({
    ...operationOptionsToRequestParameters(options),
    body: { role: resource["role"] }
  });
}

export async function _createOrReplaceDeserialize(
  result:
    | CreateOrReplace200Response
    | CreateOrReplace201Response
    | CreateOrReplaceDefaultResponse
    | CreateOrReplaceLogicalResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    role: result.body["role"]
  };
}

/** Creates or replaces a User */
export async function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<User> {
  const result = await _createOrReplaceSend(context, name, resource, options);
  return _createOrReplaceDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  name: string,
  options: DeleteOperationOptions = { requestOptions: {} }
): StreamableMethod<
  | DeleteOperation202Response
  | DeleteOperationDefaultResponse
  | DeleteLogicalResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result:
    | DeleteOperation202Response
    | DeleteOperationDefaultResponse
    | DeleteLogicalResponse
): Promise<OperationStatus> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error
    // result: result.body["result"],
  };
}

/** Deletes a User */
export async function deleteOperation(
  context: Client,
  name: string,
  options: DeleteOperationOptions = { requestOptions: {} }
): Promise<OperationStatus> {
  const result = await _deleteOperationSend(context, name, options);
  return _deleteOperationDeserialize(result);
}

export function _exportOperationSend(
  context: Client,
  name: string,
  format: string,
  options: ExportOperationOptions = { requestOptions: {} }
): StreamableMethod<
  | ExportOperation202Response
  | ExportOperationDefaultResponse
  | ExportLogicalResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}:export", name)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { format: format }
    });
}

export async function _exportOperationDeserialize(
  result:
    | ExportOperation202Response
    | ExportOperationDefaultResponse
    | ExportLogicalResponse
): Promise<ResourceOperationStatus> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
    result: !result.body.result
      ? undefined
      : {
          name: result.body.result?.["name"],
          resourceUri: result.body.result?.["resourceUri"]
        }
  };
}

/** Exports a User */
export async function exportOperation(
  context: Client,
  name: string,
  format: string,
  options: ExportOperationOptions = { requestOptions: {} }
): Promise<ResourceOperationStatus> {
  const result = await _exportOperationSend(context, name, format, options);
  return _exportOperationDeserialize(result);
}
