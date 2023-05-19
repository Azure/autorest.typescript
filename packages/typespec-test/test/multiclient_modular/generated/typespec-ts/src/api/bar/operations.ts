// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "../../rest/bar/index.js";
import {
  OperationRawReturnType,
  RequestOptions,
} from "../../common/interfaces.js";
import { Resource } from "./models.js";
import { isUnexpected } from "../../rest/foo/isUnexpected.js";

export interface GetBinaryOptions extends RequestOptions {}

export function _getBinarySend(
  context: Client.BarContext,
  options: GetBinaryOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-bar/get-binary")
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    });
}

export async function _getBinaryDeserialize(
  result: OperationRawReturnType<typeof _getBinarySend>
): Promise<any> {
  return result.body;
}

/** */
export async function getBinary(
  context: Client.BarContext,
  options: GetBinaryOptions = { requestOptions: {} }
): Promise<any> {
  const result = await _getBinarySend(context, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _getBinaryDeserialize(result);
}

export interface GetArrayOptions extends RequestOptions {}

export function _getArraySend(
  context: Client.BarContext,
  options: GetArrayOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-bar")
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    });
}

export async function _getArrayDeserialize(
  result: OperationRawReturnType<typeof _getArraySend>
): Promise<Resource[]> {
  return (result.body ?? []).map((p) => ({
    id: p["id"],
    name: p["name"],
    description: p["description"],
    type: p["type"],
  }));
}

/** */
export async function getArray(
  context: Client.BarContext,
  options: GetArrayOptions = { requestOptions: {} }
): Promise<Resource[]> {
  const result = await _getArraySend(context, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _getArrayDeserialize(result);
}

export interface CreateWithHeadersOptions extends RequestOptions {}

export function _createWithHeadersSend(
  context: Client.BarContext,
  options: CreateWithHeadersOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-bar/create-with-headers")
    .put({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    });
}

export async function _createWithHeadersDeserialize(
  result: OperationRawReturnType<typeof _createWithHeadersSend>
): Promise<Resource> {
  return {
    id: result.body["id"],
    name: result.body["name"],
    description: result.body["description"],
    type: result.body["type"],
  };
}

/** */
export async function createWithHeaders(
  context: Client.BarContext,
  options: CreateWithHeadersOptions = { requestOptions: {} }
): Promise<Resource> {
  const result = await _createWithHeadersSend(context, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _createWithHeadersDeserialize(result);
}

export interface DeleteWithHeadersOptions extends RequestOptions {}

export function _deleteWithHeadersSend(
  context: Client.BarContext,
  options: DeleteWithHeadersOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-bar/delete-with-headers")
    .delete({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    });
}

export async function _deleteWithHeadersDeserialize(
  result: OperationRawReturnType<typeof _deleteWithHeadersSend>
): Promise<void> {
  return;
}

/** */
export async function deleteWithHeaders(
  context: Client.BarContext,
  options: DeleteWithHeadersOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteWithHeadersSend(context, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _deleteWithHeadersDeserialize(result);
}
