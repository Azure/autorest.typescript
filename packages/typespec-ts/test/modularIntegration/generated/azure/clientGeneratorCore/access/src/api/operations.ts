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
import {
  AccessContext as Client,
  Discriminator200Response,
  Internal200Response,
  InternalDecoratorInInternal200Response,
  NoDecoratorInInternal200Response,
  NoDecoratorInPublic200Response,
  Operation200Response,
  Public200Response,
  PublicDecoratorInInternal200Response,
  PublicDecoratorInPublic200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
  OperationOptions,
} from "@azure-rest/core-client";
import {
  NoDecoratorInPublicOptions,
  PublicDecoratorInPublicOptions,
  NoDecoratorInInternalOptions,
  InternalDecoratorInInternalOptions,
  PublicDecoratorInInternalOptions,
  PublicOptions,
  InternalOptions,
  DiscriminatorOptions,
} from "../models/options.js";

export function _noDecoratorInPublicSend(
  context: Client,
  name: string,
  options: NoDecoratorInPublicOptions = { requestOptions: {} },
): StreamableMethod<NoDecoratorInPublic200Response> {
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
  result: NoDecoratorInPublic200Response,
): Promise<NoDecoratorModelInPublic> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function noDecoratorInPublic(
  context: Client,
  name: string,
  options: NoDecoratorInPublicOptions = { requestOptions: {} },
): Promise<NoDecoratorModelInPublic> {
  const result = await _noDecoratorInPublicSend(context, name, options);
  return _noDecoratorInPublicDeserialize(result);
}

export function _publicDecoratorInPublicSend(
  context: Client,
  name: string,
  options: PublicDecoratorInPublicOptions = { requestOptions: {} },
): StreamableMethod<PublicDecoratorInPublic200Response> {
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
  result: PublicDecoratorInPublic200Response,
): Promise<PublicDecoratorModelInPublic> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function publicDecoratorInPublic(
  context: Client,
  name: string,
  options: PublicDecoratorInPublicOptions = { requestOptions: {} },
): Promise<PublicDecoratorModelInPublic> {
  const result = await _publicDecoratorInPublicSend(context, name, options);
  return _publicDecoratorInPublicDeserialize(result);
}

export function _noDecoratorInInternalSend(
  context: Client,
  name: string,
  options: NoDecoratorInInternalOptions = { requestOptions: {} },
): StreamableMethod<NoDecoratorInInternal200Response> {
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
  result: NoDecoratorInInternal200Response,
): Promise<NoDecoratorModelInInternal> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function noDecoratorInInternal(
  context: Client,
  name: string,
  options: NoDecoratorInInternalOptions = { requestOptions: {} },
): Promise<NoDecoratorModelInInternal> {
  const result = await _noDecoratorInInternalSend(context, name, options);
  return _noDecoratorInInternalDeserialize(result);
}

export function _internalDecoratorInInternalSend(
  context: Client,
  name: string,
  options: InternalDecoratorInInternalOptions = { requestOptions: {} },
): StreamableMethod<InternalDecoratorInInternal200Response> {
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
  result: InternalDecoratorInInternal200Response,
): Promise<InternalDecoratorModelInInternal> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function internalDecoratorInInternal(
  context: Client,
  name: string,
  options: InternalDecoratorInInternalOptions = { requestOptions: {} },
): Promise<InternalDecoratorModelInInternal> {
  const result = await _internalDecoratorInInternalSend(context, name, options);
  return _internalDecoratorInInternalDeserialize(result);
}

export function _publicDecoratorInInternalSend(
  context: Client,
  name: string,
  options: PublicDecoratorInInternalOptions = { requestOptions: {} },
): StreamableMethod<PublicDecoratorInInternal200Response> {
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
  result: PublicDecoratorInInternal200Response,
): Promise<PublicDecoratorModelInInternal> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function publicDecoratorInInternal(
  context: Client,
  name: string,
  options: PublicDecoratorInInternalOptions = { requestOptions: {} },
): Promise<PublicDecoratorModelInInternal> {
  const result = await _publicDecoratorInInternalSend(context, name, options);
  return _publicDecoratorInInternalDeserialize(result);
}

export function _publicSend(
  context: Client,
  name: string,
  options: PublicOptions = { requestOptions: {} },
): StreamableMethod<Public200Response> {
  return context
    .path("/azure/client-generator-core/access/sharedModelInOperation/public")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _publicDeserialize(
  result: Public200Response,
): Promise<SharedModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function public(
  context: Client,
  name: string,
  options: PublicOptions = { requestOptions: {} },
): Promise<SharedModel> {
  const result = await _publicSend(context, name, options);
  return _publicDeserialize(result);
}

export function _internalSend(
  context: Client,
  name: string,
  options: InternalOptions = { requestOptions: {} },
): StreamableMethod<Internal200Response> {
  return context
    .path("/azure/client-generator-core/access/sharedModelInOperation/internal")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { name: name },
    });
}

export async function _internalDeserialize(
  result: Internal200Response,
): Promise<SharedModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

export async function internal(
  context: Client,
  name: string,
  options: InternalOptions = { requestOptions: {} },
): Promise<SharedModel> {
  const result = await _internalSend(context, name, options);
  return _internalDeserialize(result);
}

export function _operationSend(
  context: Client,
  name: string,
  options: OperationOptions = { requestOptions: {} },
): StreamableMethod<Operation200Response> {
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
  result: Operation200Response,
): Promise<OuterModel> {
  if (result.status !== "200") {
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
  options: OperationOptions = { requestOptions: {} },
): Promise<OuterModel> {
  const result = await _operationSend(context, name, options);
  return _operationDeserialize(result);
}

export function _discriminatorSend(
  context: Client,
  kind: string,
  options: DiscriminatorOptions = { requestOptions: {} },
): StreamableMethod<Discriminator200Response> {
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
  result: Discriminator200Response,
): Promise<AbstractModelUnion> {
  if (result.status !== "200") {
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
  options: DiscriminatorOptions = { requestOptions: {} },
): Promise<AbstractModelUnion> {
  const result = await _discriminatorSend(context, kind, options);
  return _discriminatorDeserialize(result);
}
