// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, UnexpectedHelper } from "../../rest/foo/index.js";
import {
  OperationRawReturnType,
  RequestOptions,
} from "../../common/interfaces.js";
import { Resource, CustomPage } from "./models.js";
import { isUnexpected } from "../../rest/foo/isUnexpected.js";

export interface CreateOrUpdateOptions extends RequestOptions {
  /** */
  description?: string;
}

export function _createOrUpdateSend(
  context: Client.FooContext,
  type: string,
  name: string,
  options: CreateOrUpdateOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-foo/resources/{name}", name)
    .put({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      body: { description: options?.description, type: type },
    });
}

export async function _createOrUpdateDeserialize(
  result: OperationRawReturnType<typeof _createOrUpdateSend>
): Promise<Resource> {
  return {
    id: result.body["id"],
    name: result.body["name"],
    description: result.body["description"],
    type: result.body["type"],
  };
}

/** Creates a new resource or updates an existing one. */
export async function createOrUpdate(
  context: Client.FooContext,
  type: string,
  name: string,
  options: CreateOrUpdateOptions = { requestOptions: {} }
): Promise<Resource> {
  const result = await _createOrUpdateSend(context, type, name, options);
  if (UnexpectedHelper.isUnexpected(result)) {
    throw result.body;
  }

  return _createOrUpdateDeserialize(result);
}

export interface GetOptions extends RequestOptions {}

export function _getSend(
  context: Client.FooContext,
  name: string,
  options: GetOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-foo/resources/{name}", name)
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    });
}

export async function _getDeserialize(
  result: OperationRawReturnType<typeof _getSend>
): Promise<Resource> {
  return {
    id: result.body["id"],
    name: result.body["name"],
    description: result.body["description"],
    type: result.body["type"],
  };
}

/** Gets the details of a resource. */
export async function getOperation(
  context: Client.FooContext,
  name: string,
  options: GetOptions = { requestOptions: {} }
): Promise<Resource> {
  const result = await _getSend(context, name, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _getDeserialize(result);
}

export interface DeleteOptions extends RequestOptions {}

export function _deleteOperationSend(
  context: Client.FooContext,
  name: string,
  options: DeleteOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-foo/resources/{name}", name)
    .delete({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    });
}

export async function _deleteOperationDeserialize(
  result: OperationRawReturnType<typeof _deleteOperationSend>
): Promise<void> {
  return;
}

/** Deletes a resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function deleteOperation(
  context: Client.FooContext,
  name: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _deleteOperationSend(context, name, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _deleteOperationDeserialize(result);
}

export interface ListOptions extends RequestOptions {}

export function _listSend(
  context: Client.FooContext,
  options: ListOptions = { requestOptions: {} }
) {
  return context
    .path("/cadl-foo/resources")
    .get({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    });
}

export async function _listDeserialize(
  result: OperationRawReturnType<typeof _listSend>
): Promise<CustomPage> {
  return {
    value: (result.body["value"] ?? []).map((p) => ({
      id: p["id"],
      name: p["name"],
      description: p["description"],
      type: p["type"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the existing resources. */
export async function list(
  context: Client.FooContext,
  options: ListOptions = { requestOptions: {} }
): Promise<CustomPage> {
  const result = await _listSend(context, options);
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _listDeserialize(result);
}
