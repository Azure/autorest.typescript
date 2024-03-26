// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureLocationModel } from "../models/models.js";
import {
  Get200Response,
  Header204Response,
  Post200Response,
  Put204Response,
  Query204Response,
  ScalarContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetOptions,
  PutOptions,
  PostOptions,
  HeaderOptions,
  QueryOptions,
} from "../models/options.js";

export function _getSend(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): StreamableMethod<Get200Response> {
  return context
    .path("/azure/core/scalar/azureLocation")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(result: Get200Response): Promise<string> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** get azureLocation value */
export async function get(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): Promise<string> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: string,
  options: PutOptions = { requestOptions: {} },
): StreamableMethod<Put204Response> {
  return context
    .path("/azure/core/scalar/azureLocation")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(result: Put204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** put azureLocation value */
export async function put(
  context: Client,
  body: string,
  options: PutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}

export function _postSend(
  context: Client,
  body: AzureLocationModel,
  options: PostOptions = { requestOptions: {} },
): StreamableMethod<Post200Response> {
  return context
    .path("/azure/core/scalar/azureLocation")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { location: body["location"] },
    });
}

export async function _postDeserialize(
  result: Post200Response,
): Promise<AzureLocationModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
  };
}

/** post a model which has azureLocation property */
export async function post(
  context: Client,
  body: AzureLocationModel,
  options: PostOptions = { requestOptions: {} },
): Promise<AzureLocationModel> {
  const result = await _postSend(context, body, options);
  return _postDeserialize(result);
}

export function _headerSend(
  context: Client,
  region: string,
  options: HeaderOptions = { requestOptions: {} },
): StreamableMethod<Header204Response> {
  return context
    .path("/azure/core/scalar/azureLocation/header")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { region: region },
    });
}

export async function _headerDeserialize(
  result: Header204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** azureLocation value header */
export async function header(
  context: Client,
  region: string,
  options: HeaderOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerSend(context, region, options);
  return _headerDeserialize(result);
}

export function _querySend(
  context: Client,
  region: string,
  options: QueryOptions = { requestOptions: {} },
): StreamableMethod<Query204Response> {
  return context
    .path("/azure/core/scalar/azureLocation/query")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { region: region },
    });
}

export async function _queryDeserialize(
  result: Query204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** azureLocation value query */
export async function query(
  context: Client,
  region: string,
  options: QueryOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _querySend(context, region, options);
  return _queryDeserialize(result);
}
