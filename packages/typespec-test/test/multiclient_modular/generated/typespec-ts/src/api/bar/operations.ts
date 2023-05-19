// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { isUnexpected, Client } from "../../rest/bar/index.js";
import { BarContext as Client, isUnexpected } from "../rest/index.js";
import { OperationRawReturnType } from "../common/interfaces.js";
import { Resource } from "./models.js";
import { RequestOptions } from "../../common/interfaces.js";

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
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

/** */
export async function getBinary(
  context: Client.BarContext,
  options: GetBinaryOptions = { requestOptions: {} }
): Promise<any> {
  const result = await _getBinarySend(context, options);
  return _getBinaryDeserialize(result);
  if (isUnexpected(result)) {
    throw result.body;
  }
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
  if (isUnexpected(result)) {
    throw result.body;
  }

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
  return _getArrayDeserialize(result);
  if (isUnexpected(result)) {
    throw result.body;
  }
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
  if (isUnexpected(result)) {
    throw result.body;
  }

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
  return _createWithHeadersDeserialize(result);
  if (isUnexpected(result)) {
    throw result.body;
  }
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
  if (isUnexpected(result)) {
    throw result.body;
  }

  return;
}

/** */
export async function deleteWithHeaders(
  context: Client.BarContext,
  options: DeleteWithHeadersOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteWithHeadersSend(context, options);
  return _deleteWithHeadersDeserialize(result);
  if (isUnexpected(result)) {
    throw result.body;
  }
}
