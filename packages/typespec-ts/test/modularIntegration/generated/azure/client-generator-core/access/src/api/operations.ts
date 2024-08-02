// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OuterModel,
  SharedModel,
  NoDecoratorModelInInternal,
  InternalDecoratorModelInInternal,
  PublicDecoratorModelInInternal,
  NoDecoratorModelInPublic,
  PublicDecoratorModelInPublic,
  AbstractModelUnion,
} from "../models/models.js";
import { AccessContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  NoDecoratorInPublicOptionalParams,
  PublicDecoratorInPublicOptionalParams,
  NoDecoratorInInternalOptionalParams,
  InternalDecoratorInInternalOptionalParams,
  PublicDecoratorInInternalOptionalParams,
  PublicOptionalParams,
  InternalOptionalParams,
  OperationOptionalParams,
  DiscriminatorOptionalParams,
} from "../models/options.js";

export function _noDecoratorInPublicSend(
  context: Client,
  name: string,
  options: NoDecoratorInPublicOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/access/publicOperation/noDecoratorInPublic",
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _noDecoratorInPublicDeserialize(
  result: PathUncheckedResponse,
): Promise<NoDecoratorModelInPublic> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function noDecoratorInPublic(
  context: Client,
  name: string,
  options: NoDecoratorInPublicOptionalParams = { requestOptions: {} },
): Promise<NoDecoratorModelInPublic> {
  const result = await _noDecoratorInPublicSend(context, name, options);
  return _noDecoratorInPublicDeserialize(result);
}

export function _publicDecoratorInPublicSend(
  context: Client,
  name: string,
  options: PublicDecoratorInPublicOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/access/publicOperation/publicDecoratorInPublic",
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _publicDecoratorInPublicDeserialize(
  result: PathUncheckedResponse,
): Promise<PublicDecoratorModelInPublic> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function publicDecoratorInPublic(
  context: Client,
  name: string,
  options: PublicDecoratorInPublicOptionalParams = { requestOptions: {} },
): Promise<PublicDecoratorModelInPublic> {
  const result = await _publicDecoratorInPublicSend(context, name, options);
  return _publicDecoratorInPublicDeserialize(result);
}

export function _noDecoratorInInternalSend(
  context: Client,
  name: string,
  options: NoDecoratorInInternalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/access/internalOperation/noDecoratorInInternal",
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _noDecoratorInInternalDeserialize(
  result: PathUncheckedResponse,
): Promise<NoDecoratorModelInInternal> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function noDecoratorInInternal(
  context: Client,
  name: string,
  options: NoDecoratorInInternalOptionalParams = { requestOptions: {} },
): Promise<NoDecoratorModelInInternal> {
  const result = await _noDecoratorInInternalSend(context, name, options);
  return _noDecoratorInInternalDeserialize(result);
}

export function _internalDecoratorInInternalSend(
  context: Client,
  name: string,
  options: InternalDecoratorInInternalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal",
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _internalDecoratorInInternalDeserialize(
  result: PathUncheckedResponse,
): Promise<InternalDecoratorModelInInternal> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function internalDecoratorInInternal(
  context: Client,
  name: string,
  options: InternalDecoratorInInternalOptionalParams = { requestOptions: {} },
): Promise<InternalDecoratorModelInInternal> {
  const result = await _internalDecoratorInInternalSend(context, name, options);
  return _internalDecoratorInInternalDeserialize(result);
}

export function _publicDecoratorInInternalSend(
  context: Client,
  name: string,
  options: PublicDecoratorInInternalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/access/internalOperation/publicDecoratorInInternal",
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _publicDecoratorInInternalDeserialize(
  result: PathUncheckedResponse,
): Promise<PublicDecoratorModelInInternal> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function publicDecoratorInInternal(
  context: Client,
  name: string,
  options: PublicDecoratorInInternalOptionalParams = { requestOptions: {} },
): Promise<PublicDecoratorModelInInternal> {
  const result = await _publicDecoratorInInternalSend(context, name, options);
  return _publicDecoratorInInternalDeserialize(result);
}

export function _$publicSend(
  context: Client,
  name: string,
  options: PublicOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/client-generator-core/access/sharedModelInOperation/public")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _$publicDeserialize(
  result: PathUncheckedResponse,
): Promise<SharedModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

/**
 *  @fixme public is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $public(
  context: Client,
  name: string,
  options: PublicOptionalParams = { requestOptions: {} },
): Promise<SharedModel> {
  const result = await _$publicSend(context, name, options);
  return _$publicDeserialize(result);
}

export function _internalSend(
  context: Client,
  name: string,
  options: InternalOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/client-generator-core/access/sharedModelInOperation/internal")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _internalDeserialize(
  result: PathUncheckedResponse,
): Promise<SharedModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function internal(
  context: Client,
  name: string,
  options: InternalOptionalParams = { requestOptions: {} },
): Promise<SharedModel> {
  const result = await _internalSend(context, name, options);
  return _internalDeserialize(result);
}

export function _operationSend(
  context: Client,
  name: string,
  options: OperationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/access/relativeModelInOperation/operation",
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _operationDeserialize(
  result: PathUncheckedResponse,
): Promise<OuterModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    inner: { name: result.body.inner["name"] },
  };
}

/**
 * Expected query parameter: name=<any string>
 * Expected response body:
 * ```json
 * {
 *   "name": <any string>,
 *   "inner":
 *   {
 *     "name": <any string>
 *   }
 * }
 * ```
 */
export async function operation(
  context: Client,
  name: string,
  options: OperationOptionalParams = { requestOptions: {} },
): Promise<OuterModel> {
  const result = await _operationSend(context, name, options);
  return _operationDeserialize(result);
}

export function _discriminatorSend(
  context: Client,
  kind: string,
  options: DiscriminatorOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/access/relativeModelInOperation/discriminator",
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { kind: kind },
    });
}

export async function _discriminatorDeserialize(
  result: PathUncheckedResponse,
): Promise<AbstractModelUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * Expected query parameter: kind=<any string>
 * Expected response body:
 * ```json
 * {
 *   "name": <any string>,
 *   "kind": "real"
 * }
 * ```
 */
export async function discriminator(
  context: Client,
  kind: string,
  options: DiscriminatorOptionalParams = { requestOptions: {} },
): Promise<AbstractModelUnion> {
  const result = await _discriminatorSend(context, kind, options);
  return _discriminatorDeserialize(result);
}
